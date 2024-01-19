<script lang="ts">
    // import { onMount } from 'svelte'

    import Icon from 'component/Icon.svelte'
    import Button from 'component/Button.svelte'
    // import DropDown from 'component/DropDown.svelte'

    import { router, getPathSegments, path } from 'svelte-micro'
    // import { asideExpand, appSegment } from 'src/store/store'

    export let icon: string = ''
    export let title: string = ''
    export let segment: string = ''

    export let items: any = undefined

    // onMount(async () => {
    //     $appSegment = getPathSegments($path)[0]
    //     console.log(getPathSegments($path))
    // })

    // function onTitleClick() {
    //     router.push(segment)
    //     // $appSegment = segment
    //     // $asideExpand = false
    // }

</script>

{#if items}
    <Button
        on:click={() => router.push(segment)}
        class="{getPathSegments($path).includes(segment) ? 'active' : ''} jc-start ps-1"
        data-position="right bottom"
        {title}
        disabled={getPathSegments($path).includes(segment) && segment === $path}
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
                    active={$path === item.segment}
                    segment={item.segment}
                />
            {/each}
        </div>
    </div>
{:else}
    <Button
        on:click={() => router.push(segment)}
        class="jc-start {icon ? 'ps-1' : ''}"
        {title}
        disabled={segment === $path}
    >
        {#if icon}
            <Icon class="fs-xl" name={icon}/>
        {/if}
        {title}
    </Button>
{/if}