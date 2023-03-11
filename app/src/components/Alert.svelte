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
        class:alert={alert}
        {...$$restProps}
    >
        {#if classesList.includes('alert-closable')}
            <Button
                class="btn-close fs-xs"
                on:click={() => isAlert = false}
                title="Close alert"
            ><Icon name="close"/></Button>
        {/if}
        <slot></slot>
    </div>
{/if}

<style lang="sass" global>
    .alert
        &:not(&-closable)
            .btn-close
                display: none
        &-closable
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