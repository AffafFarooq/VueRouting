import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default function useCompanies(){
    const companies = ref([])
    const company = ref([])
    const router = useRouter();
    const error = ref('')

    const getCompanies = async() => {
        let response = await axios.get('/api/companies')
        companies.value = response.data.data;
    }
    const getCompany = async(id) => {
        let response = await axios.get('/api/companies/' + id)
        company.value = response.data.data;
    }

    const storeCompany = async(data) => {
        await axios.post('/api/companies/', data)
        await router.push({ name: 'companies.index' })
    }

    const updateCompany = async(id) => {
        await axios.put('/api/companies/' +id, company.value)
        await router.push({ name: 'companies.index' })
    }


    const destroyCompany = async(id) => {
        await axios.delete('/api/companies/' + id)
    }

    return {
        companies,
        company,
        error,
        getCompanies,
        getCompany,
        storeCompany,
        updateCompany,
        destroyCompany,
    }

}
