<div class="blind"></div>

<style lang="sass" global>
    .blind
        grid-column: 1/-1
        grid-row: 1/-1
        width: var(--layout-aside-blind-width, calc(var(--key-size) * 16))
        background-color: var(--aside-bg-color, var(--secondary-color-d))
        z-index: -1
</style>