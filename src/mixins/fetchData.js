export default {
    data() {
        return {
            data: null,
            loading: true
        }
    },

    methods: {
        fetchData(endpoint) {
            this.loading = true,
            this.data = null;
            fetch(`http://localhost:3000${endpoint}`)
            .then(res => res.json())
            .then(r => {
                setTimeout(() => {
                    this.data = r;
                    this.loading = false;
                }, 1000)

            })
        }
    },
}
