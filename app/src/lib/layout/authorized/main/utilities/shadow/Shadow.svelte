<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let shadowSizesArr: string[] = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']
</script>

<article>
    <h2 id="shadow">Shadow</h2>
    <p>
        To add shadows to elements use <b>bs-...</b> classes. The <b>bs-none</b> class remove shadow.
    </p>
    <div class="display--grid g-3 gtc-2 mb-4 p-3 background-color--positive border-radius--md o-hidden">
        {#each shadowSizesArr as size}
            <div class="background-color--positive p-2 rounded bs-{size}">
                bs-{size}
            </div>
        {/each}
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="border-radius--top-0">
                {#each shadowSizesArr as size}
                    {
`<div class="background-color--positive p-2 bs-${size}">...</div>
`
                    }
                {/each}
            </Precode>
        </svelte:fragment>
    </Details>
</article>