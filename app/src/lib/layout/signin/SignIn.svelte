<script lang="ts">
    import { app } from '../../../store/store'
</script>

<main class="signin">
    <div class="body">
        <div class="logo">
            <img class="logo-full" src="../images/logo-full.svg" alt="{$app.name}">
        </div>
        <div class="title">Демонстрационный стенд</div>
        <form class="form d-grid g-4">
            <div>
                <label for="username" class="tf_form-label">Логин</label>
                <input id="username" class="tf_form-control tf_form-control-secondary" name="username" placeholder="логин" type="text">
            </div>
            <div>
                <label for="password" class="tf_form-label">Пароль</label>
                <input id="password" class="tf_form-control tf_form-control-secondary" name="password" placeholder="пароль" type="password">
            </div>
            <!-- <div class="text-error"><i class="fas fa-exclamation-circle"></i> Некорректные данные для входа в систему</div> -->
            <button class="tf_btn tf_btn-primary" type="submit">Войти</button>
        </form>
    </div>
    <footer class="footer"> &copy;2021 {$app.name} / v0.1.0 power with Svelte</footer>
</main>


<style lang="sass">
    .signin
        grid-column: 1/-1
        grid-row: 1/-1
        display: grid
        background-image: url(../images/bkg-login-page.svg)
        background-position: left center
        background-repeat: no-repeat
        background-size: cover
        overflow-x: hidden
        overflow-y: auto
        .body,
        .footer
            grid-column: 1/-1
            grid-row: 1/-1
        .body
            display: grid
            gap: calc(var(--key-size) * 1.5)
            margin: auto auto auto calc(var(--key-size) * 14)
            padding: var(--key-size) 0
            justify-content: center
            > *
                max-width: calc(var(--key-size) * 16)
        .footer
            margin: auto auto var(--key-size) var(--key-size)
            font-size: x-small
            color: var(--negative-color-25)

        .portrait &
            .body
                margin: auto
</style>