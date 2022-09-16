<script>
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>
<section>
    <h3 id="headings">Headings</h3>
    <!-- <div
        class="d-inline-grid cols g-2 js-start ai-center"
        style="--cols-tl: auto auto;"
    >
        <div>Heading</div><div>Example</div>
        <code>&lt;h1&gt;&lt;/h1&gt;</code><h1>Heading - 1</h1>
        <code>&lt;h2&gt;&lt;/h2&gt;</code><h2>Heading - 2</h2>
        <code>&lt;h3&gt;&lt;/h3&gt;</code><h3>Heading - 3</h3>
        <code>&lt;h4&gt;&lt;/h4&gt;</code><h4>Heading - 4</h4>
        <code>&lt;h5&gt;&lt;/h5&gt;</code><h5>Heading - 5</h5>
        <code>&lt;h6&gt;&lt;/h6&gt;</code><h6>Heading - 6</h6>
    </div> -->

    <div class="d-grid g-3 mb-4 p-3 bgc-positive br">
        <div>
            <div class="h1">Heading - 1</div>
            <div class="h2">Heading - 2</div>
            <div class="h3">Heading - 3</div>
            <div class="h4">Heading - 4</div>
            <div class="h5">Heading - 5</div>
            <div class="h6">Heading - 6</div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
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