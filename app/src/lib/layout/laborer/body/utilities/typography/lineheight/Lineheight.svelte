<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<section>
    <h3 id="lineHight">Line height</h3>
    <p>
        ...
    </p>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br">
        <div class="lh-xxs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus doloribus porro eos quidem commodi vel accusantium odit ducimus tempore! Facilis, repellat commodi. Unde, sapiente eum necessitatibus eveniet fugit corrupti cum.</div>
        <div class="lh-xs">Corporis perferendis nulla magnam cum placeat nam omnis libero labore error blanditiis! Dicta quasi quidem maiores eveniet voluptatem vel earum inventore dolorum in expedita, nisi, deleniti distinctio, beatae totam necessitatibus.</div>
        <div class="lh-sm">Deserunt voluptatem amet ad aliquid soluta similique nemo voluptate aperiam? Atque, magni sunt. Soluta nobis ipsa esse dolores facere, perspiciatis tempore odit, adipisci culpa, placeat modi incidunt voluptatum quod voluptatem.</div>
        <div class="lh-md">Eligendi et provident exercitationem iure rerum excepturi iste repellendus, iusto quaerat quibusdam ea consequuntur voluptatibus commodi aliquam corrupti beatae praesentium culpa nobis voluptates tempora dolorum at illo! Molestiae, voluptates esse.</div>
        <div class="lh-lg">Qui mollitia ut ullam beatae rerum consequuntur, facilis, aperiam pariatur accusamus debitis repudiandae labore officiis culpa eum iste inventore sapiente porro cum error blanditiis iusto corporis. Architecto mollitia eos dolore!</div>
        <div class="lh-xl">Cumque, commodi. Eveniet ipsa cumque non aliquam quidem voluptatum voluptate, est sequi, molestias et earum temporibus id molestiae itaque blanditiis iure autem corrupti dolorum odit laboriosam illo rerum architecto mollitia.</div>
        <div class="lh-xxl">Harum fugit ipsa rerum nulla est, quae ex dolor aut rem velit debitis corrupti minima tenetur quam consequuntur doloremque distinctio vitae eaque repellat sequi qui. Distinctio nemo qui odit beatae?</div>
        <div class="lh-xxxl">Delectus deserunt perspiciatis corporis pariatur laboriosam nemo quasi blanditiis doloremque, quam nulla tempore, quod labore, reiciendis voluptas laudantium sit deleniti hic necessitatibus repellendus accusantium cupiditate minus excepturi. Modi, est quidem?</div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
                {
`<div class="lh-xxs">...</div>
<div class="lh-xs">...</div>
<div class="lh-sm">...</div>
<div class="lh-md">...</div>
<div class="lh-lg">...</div>
<div class="lh-xl">...</div>
<div class="lh-xxl">...</div>
<div class="lh-xxxl">...</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>