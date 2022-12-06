<script lang="ts">
    // import Icon from 'component/Icon.svelte'
    // import Button from 'component/Button.svelte'
</script>

<div class="brand">
    <div class="logo">
        <img class="w-100 h-100" src="/images/logo.svg" alt="S4 - The lightweight Svelte UI Kit">
    </div>
    <div class="title">
        <span class="fw-600">S4</span> - the lightweight UI pattern
    </div>
    <!-- <Button class="btn btn-ico c-positive">
        <Icon name="ghost" size="lg"/>
    </Button> -->
</div>

<style lang="sass" global>
    .brand
        grid-column: 1/-1
        grid-row: 2/3
        display: grid
        justify-items: center
        align-items: center
        overflow: hidden
        .logo
            width: 100%
            max-width: calc(var(--layout-aside-item-height) * 2)
            height: 100%
            max-height: var(--layout-aside-item-height)
        // .title
        //     line-height: 1.25
</style>