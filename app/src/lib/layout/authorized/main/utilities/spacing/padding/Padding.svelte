<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
    import Button from 'component/Button.svelte'

    let paddingPropertyObj = {
        'all': '-',
        'x axis': 'x-',
        'y axis': 'y-',
        'start': 's-',
        'top': 't-',
        'end': 'e-',
        'bottom': 'b-',
    }
    let paddingProperty: string = paddingPropertyObj['all']
</script>

<section>
    <h3 id="padding">Padding</h3>
    <p>
        The <b>m</b> classes are used to set the padding.
        The prefix <b>x</b>, <b>y</b> after <b>m</b> sets the axios value and <b>l</b>, <b>t</b>, <b>r</b> and <b>b</b> the direction value.
        To disable padding use the <b>m...-0</b> classes.
    </p>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br-md">
        <div class="d-flex g-2">
            {#each Object.entries(paddingPropertyObj) as [key, value]}
                <Button
                    class="btn-secondary {paddingProperty === value ? 'active' : ''}"
                    on:click = {() => paddingProperty = value}
                    disabled = {paddingProperty === value}
                >{key}</Button>
            {/each}
        </div>
        <div class="d-grid gtc-4 align-items--start g-2">
            {#each Array(8) as _, i}
                <div class="bgc-negative-10 p{paddingProperty}{i + 1}">
                    <div class="bgc-negative-10 px-2 py-1">p{paddingProperty}{i + 1}</div>
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
`<div class="p${paddingProperty}#">...</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>