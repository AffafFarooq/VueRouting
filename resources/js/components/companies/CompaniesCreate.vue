<template>
    <form @submit.prevent="saveCompany">
        <div class="form-group">
            <label for="name">Company Name:</label>
            <input type="name" name="name" class="form-control" id="name" v-model="form.name">
        </div>
        <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" name="email" class="form-control" id="email" v-model="form.email">
        </div>
        <div class="form-group">
            <label for="name">Address:</label>
            <input type="text" name="address" class="form-control" id="address" v-model="form.address">
        </div>
        <div class="form-group">
            <label for="name">Website Url:</label>
            <input type="url" name="website" class="form-control" id="website" v-model="form.website">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>

    import { reactive } from 'vue'
    import useCompanies from '../../composable/companies'

    export default {
        setup(){
            const form = reactive({
                'name': '',
                'email': '',
                'address': '',
                'website': ''
            })

            const { errors, storeCompany } = useCompanies()

            const saveCompany = async() => {
                await storeCompany({...form});
            }

            return{
                form,
                errors,
                saveCompany
            }
        }
    }
</script>
