<script lang="ts">
    import { onMount } from 'svelte'

    import Icon from 'component/Icon.svelte'
    import Button from 'component/Button.svelte'
    import DropDown from 'component/DropDown.svelte'

    import { router, getPathSegments, path } from 'svelte-micro'
    import { asideExpand, appSegment } from 'src/store/store'

    export let active: boolean = false
    export let icon: string = ''
    export let title: string = ''
    export let action: any = undefined
    export let segment: string = ''

    export let items: any = undefined

    onMount(async () => {
        $appSegment = getPathSegments($path)[0]
    })

    function onTitleClick() {
        router.push(segment)
        $appSegment = segment
        $asideExpand = false
    }

</script>

{#if items}
    <DropDown class="drpdwn-hover">
        <Button 
            slot="btn"
            class="{active} jc-start px-1"
            data-position="right bottom"
            on:click={onTitleClick}
            disabled={active}
        >
            {#if icon}
                <Icon class="fs-xl" name={icon}/>
            {/if}
            {title}
        </Button>
        <div
            slot="content"
            class="d-grid g-2 w p-2 bgc-positive br border border-negative-30 bs-md"
            style="--w: 16rem"
        >
            {#each items as item}
                <svelte:self
                    {...item}
                    active={$appSegment === item.segment}
                    segment={item.segment}
                />
            {/each}
        </div>
    </DropDown>
{:else}
    <Button 
        slot="btn"
        class="{active} jc-start px-1"
        data-position="right bottom"
        on:click={onTitleClick}
        disabled={active}
    >
        {#if icon}
            <Icon class="fs-xl" name={icon}/>
        {/if}
        {title}
    </Button>
{/if}

<style lang="sass">
    
</style>