<script>
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<section>
    <h3 id="headings">Headings</h3>
    <div class="d-grid g-3 mb-4 p-3 background-color--positive border-radius--md">
        <div>
            <h1>Heading - 1</h1>
            <h2>Heading - 2</h2>
            <h3>Heading - 3</h3>
            <h4>Heading - 4</h4>
            <h5>Heading - 5</h5>
            <h6>Heading - 6</h6>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="border-radius--top-0">
                {#each {length: 6} as _, i}
                    {
`<h${i + 1}>Heading - ${i + 1}<h${i + 1}>
<div class="h${i + 1}" aria-level="${i + 1}">Heading - ${i + 1}</div>
`
                    }
                {/each}
            </Precode>
        </svelte:fragment>
    </Details>
</section>