<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let heightParamsArr: string[] = [ '', '-0', '-25', '-50', '-75', '-100', '-fit', '-min', '-max' ]
</script>

<section>
    <h3 id="aspectratio">Aspect ratio</h3>
    <p>
        ...
    </p>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br-md">
        ...
    </div>
    <Details>
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
    </Details>
</section>