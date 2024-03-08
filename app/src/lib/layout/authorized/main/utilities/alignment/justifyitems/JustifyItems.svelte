<script lang="ts">
    import Precode from 'component/Precode.svelte'

    let justifyItemsArr: string[] = [ 'center', 'end', 'start', 'stretch' ]
</script>

<section>
    <h3 id="justifyItems">Justify items</h3>
    <p>
        The <b>justify-item--{Object.values(justifyItemsArr).join('/')}</b> classes work for all items inside container, giving them all a default way of justifying each box along the appropriate axis.
    </p>
    <div class="d-grid g-5">
        <div class="alert alert-warning justify-self--start">
            <span class="ico fs-xl" style="--ico-image: url(/icons/alert-triangle.svg)"></span>
            The properties works only for <b>grid</b> containers!
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid g-3 p-3 background-color--positive br-md">
                {#each justifyItemsArr as item }
                    <div class="d-grid gtc-2 g-2 background-color--negative-10 p-2 justify-item--{item}">
                        <div class="background-color--negative-10 px-2 py-1">one</div>
                        <div class="background-color--negative-10 px-2 py-1">two</div>
                        <div class="background-color--negative-10 px-2 py-1">three</div>
                    </div>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {#each justifyItemsArr as item }
                    {
`<div class="d-grid justify-item--${item}">
    // ...
</div>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</section>