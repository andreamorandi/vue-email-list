const { createApp } = Vue;

createApp({
    data() {
        return {
            emailsNumber: 10,
            emails: []
        }
    },
    created() {
        this.getEmails();
    },
    methods: {
        getEmails() {
            for(let i = 0; i < this.emailsNumber; i++) {
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((email) => {
                        this.emails.push(email.data.response);
                    });
            }
        }
    }
}).mount("#app");