<script>
    // import { onMount } from 'svelte'

    import Icon from 'component/Icon.svelte'
    import Button from 'component/Button.svelte'
    // import Dropdown from 'component/Dropdown.svelte'

    import { router, getPathSegments, path } from 'svelte-micro'
    // import { asideExpand, appSegment } from 'src/store/store'

    export let id = ''
    export let icon = ''
    export let title = ''
    export let segment = ''

    export let items = ''

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
        {id}
        on:click={() => router.push(segment)}
        class="{getPathSegments($path).includes(segment) ? 'active' : ''} justify-content--start ps-1"
        data-position="right center"
        {title}
        disabled={getPathSegments($path).includes(segment) && segment === $path}
    >
        {#if icon}
            <Icon name={icon}/>
        {/if}
        {title}
    </Button>
    <div class="drp-content height--100">
        <div
            class="display--grid g-2 width p-2 background-color--positive border-radius--md border-style--solid border-color--negative-30 box-shadow--sm height--100 overflow-y--auto align-content--start"
            style="--width: 16em"
        >
            {#each items as item}
            <!-- active={$path === item.segment} -->
                <svelte:self
                    {...item}
                    segment={item.segment}
                />
            {/each}
        </div>
    </div>
{:else}
    <Button
        {id}
        on:click={() => router.push(segment)}
        class="justify-content--start {icon ? 'ps-1' : ''}"
        {title}
        disabled={segment === $path}
    >
        {#if icon}
            <Icon name={icon}/>
        {/if}
        {title}
    </Button>
{/if}