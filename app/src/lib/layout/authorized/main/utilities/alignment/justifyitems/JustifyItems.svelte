<script lang="ts">
    import Precode from 'component/Precode.svelte'

    let justifyItemsArr: string[] = [ 'center', 'end', 'start', 'stretch' ]
</script>

<section>
    <h3 id="justifyItems">Justify items</h3>
    <p>
        The <b>justify-items--{Object.values(justifyItemsArr).join('/')}</b> classes work for all items inside container, giving them all a default way of justifying each box along the appropriate axis.
    </p>
    <div class="display--grid gap--lg">
        <div class="alert alert-warning justify-self--start">
            <span class="ico font-size--xl" style="--ico-image: url(/icons/alert-triangle.svg)"></span>
            The properties works only for <b>grid</b> containers!
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                {#each justifyItemsArr as item}
                    <div class="display--grid grid-template-columns--2 gap--xs background-color--negative-10 padding--xs justify-items--{item}">
                        <div class="background-color--negative-10 padding-x--xs padding-y--xxs">one</div>
                        <div class="background-color--negative-10 padding-x--xs padding-y--xxs">two</div>
                        <div class="background-color--negative-10 padding-x--xs padding-y--xxs">three</div>
                    </div>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {#each justifyItemsArr as item}
                    {
`<div class="display--grid justify-items--${item}">
    ...
</div>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</section>