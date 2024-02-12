<script lang="ts">
    import Button from 'component/Button.svelte'
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let overflowPropertyArr: string[] = [ 'auto', 'hidden', 'visible', 'scroll' ]
    let overflowProperty: string = overflowPropertyArr[0]
</script>
<section>
    <h2 class="overflow">Overflow</h2>
    <p>
        The overflow property allow to clip content, set render scrollbars or how to just display content when it overflows its block level container.
    </p>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br">
        <div class="d-flex g-2">
            {#each overflowPropertyArr as values }
                <Button
                    class="btn-secondary {overflowProperty === values ? 'active' : ''}"
                    on:click = {() => overflowProperty = values}
                    disabled = {overflowProperty === values}
                >o-{values}</Button>
            {/each}
        </div>
        <div class="o-{overflowProperty} mx-auto bgc-negative-10 p-2" style="width: 24em; height: 16em;">
            The Delta S4 competed in the World Rally Championship in 1985 and 1986, until Group B class was disbanded and the cars were eventually banned from competition completely by European sanctioning body FIA. The car replaced, and was an evolution of the 037.
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
                {
`<div class="o-${overflowProperty}>...</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>