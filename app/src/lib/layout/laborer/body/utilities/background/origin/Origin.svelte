<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<section>
    <h3 id="backgroundOrigin">Origin</h3>
    <p>
        Add the <b>bgo-border</b>, <b>bgo-padding</b> or <b>bgo-content</b> classes to container to work with background-attachment.
    </p>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br">
        <div class="bgc-negative-10 bgi bgo-border p-8" style="--bgi: url(http://placekitten.com/200/300)"></div>
        <div class="bgc-negative-10 bgi bgo-padding p-8" style="--bgi: url(http://placekitten.com/200/300); border-width: 10px; border-style: solid;"></div>
        <div class="bgc-negative-10 bgi bgo-content p-8" style="--bgi: url(http://placekitten.com/200/300)"></div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
                {
`<div class="bgi bgo-border" style="--bgi: url(http://placekitten.com/200/300)"></div>
<div class="bgi bgo-padding" style="--bgi: url(http://placekitten.com/200/300); border-width: 10px; border-style: solid;"></div>
<div class="bgi bgo-content" style="--bgi: url(http://placekitten.com/200/300)"></div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>