<template>
    <header>
        <nav>
            <div class="logo">
                <RouterLink to="/">Techno</RouterLink>
            </div>

            <ul>
                <li>
                    <RouterLink to="/cursos">Cursos</RouterLink>
                </li>
                <li>
                    <RouterLink to="/contato">Contato</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'TheHeader'
    }
</script>

<style scoped>

    header {
        background-color: #234;
    }
    header a {
        color: white;
    }
    nav {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        align-content: space-between;
        padding: 20px;
    }
    .logo {
        flex: 1;
    }
   
    a.router-link-exact-active {
        color: #4B8;
    }
    .logo a {
        color: white;
        font-size: 1.2rem;
    }
    ul li {
        display: inline-block;
    }
    li a {
        padding: 0 10px;
        margin-left: 10px;
    }
</style>