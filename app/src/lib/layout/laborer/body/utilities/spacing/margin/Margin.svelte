<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
    import Button from 'component/Button.svelte'

    let marginPropertyObj = {
        'all': '-',
        'x axis': 'x-',
        'y axis': 'y-',
        'left': 'l-',
        'top': 't-',
        'right': 'r-',
        'bottom': 'b-',
    }
    let marginProperty: string = marginPropertyObj['all']
</script>

<section>
    <h3 id="margin">Margin</h3>
    <p>
        The <b>m</b> classes are used to set the margin.
        The prefix <b>x</b>, <b>y</b> after <b>m</b> sets the axios value and <b>l</b>, <b>t</b>, <b>r</b> and <b>b</b> the direction value.
        To disable margin use the <b>m...-0</b> classes.
        Full list of the width classes:
    </p>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br">
        <div class="d-flex g-2">
            {#each Object.entries(marginPropertyObj) as [key, value]}
                <Button
                    class="btn-secondary {marginProperty === value ? 'active' : ''}"
                    on:click = {() => marginProperty = value}
                    disabled = {marginProperty === value}
                >{key}</Button>
            {/each}
        </div>
        <div class="d-grid cols-4 ai-start g-2">
            {#each Array(8) as _, i}
                <div class="bgc-negative-10">
                    <div class="bgc-negative-10 px-2 py-1 m{marginProperty}{i + 1}">m{marginProperty}{i + 1}</div>
                </div>
            {/each}
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
                {
`...`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>