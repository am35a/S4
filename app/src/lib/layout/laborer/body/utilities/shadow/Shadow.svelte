<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let shadowSizesArr: string[] = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']
</script>

<article>
    <h2 id="shadow">Shadow</h2>
    <p>
        To add shadows to elements use <b>s-...</b> classes. To remove use <b>s-none</b> class.
    </p>
    <div class="d-grid g-3 cols-2 mb-4 p-3 bgc-positive br o-hidden">
        {#each shadowSizesArr as size}
            <div class="bgc-positive p-2 rounded s-{size}">
                s-{size}
            </div>
        {/each}
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
                {#each shadowSizesArr as size}
                    {
`<div class="bgc-positive p-2 rounded s-${size}">...</div>
`
                    }
                {/each}
            </Precode>
        </svelte:fragment>
    </Details>
</article>