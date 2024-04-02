<!-- 
    1) добавить добавление иконки инфо алерт и т.п.
    2) пересмотреть кнопку закрытия, возможно убрать в нижнюю часть
 -->

<script lang="ts">
    import Icon from 'component/Icon.svelte'
    import Button from 'component/Button.svelte'

    let classesList: string = 'alert'
    let isAlert: boolean = true

    $: {
        if($$restProps.class !== undefined) {
            classesList = $$restProps.class
            
            if(![...classesList].includes('alert'))
                classesList = `alert ${classesList}`
        }
        $$restProps.class = classesList
    }
</script>

{#if isAlert}
    <div
        class:alert={true}
        {...$$restProps}
    >
        {#if classesList.includes('alert-closable')}
            <Button
                class="btn-close font-size--xs"
                on:click={() => isAlert = false}
                title="Close alert"
            ><Icon name="close"/></Button>
        {/if}
        <slot></slot>
    </div>
{/if}

<style lang="sass" global>
    $accentColors: 'primary', 'secondary', 'info', 'success', 'warning', 'error'
    
    .alert
        position: relative
        // grid-gap: var(--size-4)
        padding: var(--size-3) var(--size-4)
        border-radius: var(--size-1)
        font-weight: 500
        user-select: none
        @each $colorName in $accentColors
            &-#{$colorName}
                background-color: var(--#{$colorName}-color)
                color: var(--positive-color)
                a
                    color: var(--positive-color)
            &-alt-#{$colorName}
                background-color: var(--#{$colorName}-color-m)
                color: var(--#{$colorName}-color-d)
            &-outline-#{$colorName}
                color: var(--#{$colorName}-color)
                outline-width: calc(var(--size-1) / 4)
                outline-style: solid
                outline-color: currentColor
                outline-offset: calc(var(--size-1) / 4 * -1)

        &:not(&-closable)
            .btn-close
                display: none
        &-closable
            &.alert
                padding-right: var(--size-6)
            .btn-close
                position: absolute
                top: 0
                right: 0
                padding: var(--size-1)
                border-top-left-radius: 0
                border-bottom-right-radius: 0
                &:hover
                    background-color: var(--positive-color-50)
</style>