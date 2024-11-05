<template>
    <div>
        <h1>Register</h1>
    </div>
    <form>
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password">
        </div>
        <div>
            <button type="submit">Register</button>
        </div>
        <hr>
        <div>
            <p>Já tem uma conta? <router-link :to="{path:'login'}">Entre</router-link></p>
        </div>
    </form>
</template>

<script>
export default {

}
</script>

<style>
    form {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 0 auto;
    }

    div {
        margin-bottom: 1rem;
    }

    label {
        font-weight: bold;
    }

    input {
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
    }

    button {
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: none;
        background-color: #333;
        color: white;
        cursor: pointer;
    }
</style>