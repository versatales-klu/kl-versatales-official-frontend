class URL {
    static get BASE_URL() {
        // If frontend is running on localhost, use local backend
        return window.location.hostname === "localhost"
            ? "http://127.0.0.1:5000"
            : "https://kl-versatales-official-backend.onrender.com";
    }

    static get SERVER_STATUS() {
        return `${this.BASE_URL}/server-status`;
    }

    static get ROLE_REGISTRATION() {
        return `${this.BASE_URL}/role-registration`;
    }

    static get INITIAL_ROLE_FORM_SUBMIT() {
        return `${this.ROLE_REGISTRATION}/initial-role-form-submit`;
    }

    static get FULL_ROLE_FORM_SUBMIT() {
        return `${this.ROLE_REGISTRATION}/full-role-form-submit`;
    }
}

export default URL;
