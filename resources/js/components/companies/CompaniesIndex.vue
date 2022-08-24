<template>
    <div class="container-fluid p-5">
        <h2>Employee Records</h2>
        <router-link :to="{ name: 'companies.create' }" class="text-sm font-medium btn btn-primary">Create</router-link>

        <table class="table table-hover mt-5 table-style">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody v-for="company in companies" :key="company.id">
                <td>{{company.name}}</td>
                <td>{{company.email}}</td>
                <td>{{company.address}}</td>
                <td>{{company.website}}</td>
                <td>
                    <button type="button" class="btn btn-danger mr-1" @click="deleteCompany(company.id)">
                        Delete
                    </button>
                    <router-link :to="{ name: 'companies.edit', params: { id: company.id } }" class="text-sm font-medium btn btn-primary">
                        Edit
                    </router-link>
                </td>
            </tbody>
        </table>
    </div>
</template>

<script>
    import useCompanies from '../../composable/companies';
    import { onMounted } from 'vue';

    export default{
        setup() {
            const { companies, getCompanies, destroyCompany } = useCompanies()
            onMounted(getCompanies)

            const deleteCompany = async(id) => {
                if(!window.confirm("Are you sure?")) {
                    return;
                }
                await destroyCompany(id);
                await getCompanies();
            }

            return{
                companies,
                deleteCompany
            }
        }
    }
</script>

<style>
    .btn-success {
        background-color: green;
    }
</style>
