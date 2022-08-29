<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<section>
    <h3 id="backgroundImage">Image</h3>
    <p>
        Add the <b>bgi</b> class to container before work with background-image and use the <b>--bgi</b> variable to control the property.
    </p>
    <div class="d-grid g-3 mb-4 p-2 bgc-positive rounded">
        <div class="bgi p-8" style="--bgi: url(http://placekitten.com/200/300)"></div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {
`<div class="bgi" style="--bgi: url(http://placekitten.com/200/300)"></div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>
