
<main class="authorization">
    <div class="authorization-body">
        <div class="authorization-logo">
            <img class="logo-full" src="../images/logo-full.svg" alt="">
        </div>
        <div class="authorization-title">Демонстрационный стенд</div>
        <form class="d-grid g-4">
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
    <footer class="authorization-footer"> &copy;2021 / v0.1.0 power with Svelte</footer>
</main>


<style lang="sass">
    .authorization
        display: grid
        width: 100%
        height: 100%
        background-image: url(../images/bkg-login-page.svg)
        background-position: left center
        background-repeat: no-repeat
        background-size: cover
        overflow-x: hidden
        overflow-y: auto
        &-body,
        &-footer
            grid-column: 1/-1
            grid-row: 1/-1
        &-body
            display: grid
            gap: calc(var(--key-size) * 1.5)
            margin: auto
            padding: var(--key-size) 0
            justify-content: center
            > *
                max-width: calc(var(--key-size) * 16)
        &-footer
            margin-top: auto
            font-size: x-small


// .tf_authorization {
//     display: grid;
//     min-width: 100vw;
//     width: 100%;
//     min-height: 100vh;
//     height: 100%;
//     background-image: url(../images/bkg-login-page.svg);
//     background-position: left center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     overflow-x: hidden;
//     overflow-y: auto;
//     > *:not(script) {
//         grid-row: 1/2;
//         grid-column: 1/2;
//     }
//     .tf_authorization-body {
//         display: grid;
//         gap: calc(var(--key-size) * 1.5);
//         margin: auto;
//         padding: var(--key-size) 0;
//         justify-content: center;
//         > * {
//             max-width: calc(var(--key-size) * 16);
//         }
//         @media (orientation: landscape) {
//             width: 50%;
//             margin: auto auto auto 0;
//         }
//         .tf_authorization-logo {
//             display: flex;
//             align-items: center;
//             .tf_logo-full {
//                 max-width: 100%;
//             }
//         }
//         .tf_authorization-title {
//             font-size: calc(var(--key-size) * 1.25);
//             font-weight: 600;
//         }
//     }
// }
// .tf_authorization-info {
//     display: none;
//     .tablet &,
//     .desktop & {
//         display: inline;
//         margin: auto auto var(--key-size) var(--key-size);
//         color: var(--negative-color-25);
//     }
// }

</style>