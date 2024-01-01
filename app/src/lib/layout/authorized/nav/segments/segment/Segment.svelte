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

<!-- <div class="drpdwn-hover"> -->
    {#if items}
        <Button
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
        <div class="drp-content h-100">
            <div
                class="d-grid g-2 w p-2 bgc-positive br border border-negative-30 bs-sm h-100 oy-auto ac-start"
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
        </div>
    {:else}
        <Button
            class="{active} jc-start px-1"
            on:click={onTitleClick}
            disabled={active}
            >
            {#if icon}
            <Icon class="fs-xl" name={icon}/>
            {/if}
            {title}
        </Button>
    {/if}
<!-- </div> -->

<style lang="sass" global>
    .drp-content
        scrollbar-width: none
        &::-webkit-scrollbar
            display: none
</style>