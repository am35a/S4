<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let fontSizeArr: string[] = [ 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl' ]
</script>

<div>
    <h4 id="size">Size</h4>
    <p>
        To set a font size have to use the <b>fs-...</b> classes.
        For custom sizes use the <b>fs</b> class with the <b>--fs</b> variable.
        Also available the standard <b>small</b> attribute to make any font small and <b>small</b> supports levels, the more attributes inside the smaller the font.
    </p>
    <div class="display--grid g-3 mb-4 p-3 background-color--positive border-radius--md">
        <div>
            {#each fontSizeArr as item }
                <div class="fs-{item}">fs-{item}</div>
            {/each}
        </div>
        <div class="fs" style="--fs: 2em">
            fs 2em 
        </div>
        <div class="display--grid">
            <small>small</small>
            <small><small>bouble small</small></small>
            <small><small><small>triple small</small></small></small>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="border-radius--top-0">
                {#each fontSizeArr as item }
                    {
`<div class="fs-${item}">fs-${item}</div>
`
                    }
                {/each}
                {
`
<div class="fs" style="--fs: 2em">fs 2em </div>

<small>small</small>
<small><small>bouble small</small></small>
<small><small><small>triple small</small></small></small>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</div>