<script lang="ts">
    import Button from 'component/Button.svelte'
    // import Precode from 'component/Precode.svelte'
    // import Details from 'component/Details.svelte'

    let positionPropertyArr: string[] = [ 'static', 'relative', 'absolute', 'fixed', 'sticky' ]
    let positionProperty: string = positionPropertyArr[0]
</script>

<article>
    <h2 id="position">Position</h2>
    <p>
        For the location of the element in the document area determine the classes: <b>p-static</b>, <b>p-relative</b>, <b>p-absolute</b>, <b>p-fixed</b> and <b>p-sticky</b>.
    </p>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br">
        <div class="d-flex g-2">
            {#each positionPropertyArr as values }
                <Button
                    class="btn-secondary {positionProperty === values ? 'active' : ''}"
                    on:click = {() => positionProperty = values}
                    disabled = {positionProperty === values}
                >p-{values}</Button>
            {/each}
        </div>
        <div class="bgc-negative-10 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quos libero, amet iure in maxime odio nemo quia ratione, necessitatibus quaerat soluta delectus magnam! Commodi quae ut mollitia qui necessitatibus?
            <div class="f-start bgc-negative-10 p-2">regular</div>
            <div class="f-start bgc-negative-10 p-2 p-{positionProperty}">p-{positionProperty}</div>
            <div class="f-start bgc-negative-10 p-2">regular</div>
            Corporis eum expedita recusandae, adipisci autem enim. Harum cumque sunt facilis quas. Nesciunt itaque accusamus velit, dignissimos, quis aut expedita sit sed magni praesentium ducimus fuga eveniet! Perferendis, accusantium nesciunt.
        </div>
    </div>
    <!-- <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
                {
`...
`
                }
            </Precode>
        </svelte:fragment>
    </Details> -->
</article>