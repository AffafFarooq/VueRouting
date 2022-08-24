<template>
    <form @submit.prevent="saveCompany">
        <div class="form-group">
            <label for="name">Company Name:</label>
            <input type="name" name="name" class="form-control" id="name" v-model="company.name">
        </div>
        <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" name="email" class="form-control" id="email" v-model="company.email">
        </div>
        <div class="form-group">
            <label for="name">Address:</label>
            <input type="text" name="address" class="form-control" id="address" v-model="company.address">
        </div>
        <div class="form-group">
            <label for="name">Website Url:</label>
            <input type="url" name="website" class="form-control" id="website" v-model="company.website">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
    import { onMounted } from 'vue';
import useCompanies from '../../composable/companies';

    export default {
        props: {
            id: {
                required: true,
                    type: String
            }
        },
        setup(props){
            const { company, getCompany, updateCompany }  = useCompanies();
            onMounted(getCompany(props.id))
            const saveCompany = async () => {
                await updateCompany(props.id);
            }
            return {
                company,
                saveCompany
            }
        }
    }
</script>
