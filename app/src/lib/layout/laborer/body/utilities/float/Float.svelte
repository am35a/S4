<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<article>
    <h2 id="float">Float</h2>
    <p>
        Use <b>f-...</b> classes to floats any element across any breakpoint.
    </p>
    <div class="alert alert-warning js-start">
        * Pay attention the <b>f-start</b> and <b>f-start</b> classes do not support by invalid browsers like Chrome or Safari.
    </div>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br">
        <div class="bgc-negative-10 p-2">
            <div class="f-left bgc-negative-10 p-2">f-left</div>
            Unde quae consequatur optio, saepe, harum modi nobis excepturi cum ducimus minima architecto tenetur laudantium quaerat rem fuga nihil nemo distinctio beatae minus, rerum voluptate vel facere. Corporis, blanditiis inventore!
        </div>
        <div class="bgc-negative-10 p-2">
            <div class="f-right bgc-negative-10 p-2">f-right</div>
            Dicta modi eaque, commodi delectus sint enim perspiciatis, cupiditate inventore sequi beatae pariatur at earum perferendis eius doloribus blanditiis minima temporibus voluptates. Possimus assumenda quasi, quaerat id molestiae nihil sint.
        </div>
        <div class="bgc-negative-10 p-2">
            <div class="f-start bgc-negative-10 p-2">f-start *</div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam sequi provident dolores impedit, excepturi eaque dolore, sint, quasi qui voluptatum culpa adipisci ad non. Libero perspiciatis illo error porro ea?
        </div>
        <div class="bgc-negative-10 p-2">
            <div class="f-end bgc-negative-10 p-2">f-end *</div>
            Voluptates recusandae libero nostrum molestiae commodi minus doloribus, dignissimos ratione sint atque tenetur est quam, magni quae consequatur deserunt optio pariatur architecto! Non eaque animi ab qui officia nam vel.
        </div>
        <div class="bgc-negative-10 p-2">
            <div class="f-none bgc-negative-10 p-2">f-none</div>
            Corporis ipsa voluptatum, non magni assumenda quos! Mollitia iure totam hic iusto dolore consectetur veniam. Labore, tempore, ducimus ab officia repudiandae omnis iusto voluptatem sunt voluptate nostrum, unde atque. Molestiae.
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
                {
`<div>
    <div class="f-start">f-start</div>
    ...
</div>
<div>
    <div class="f-end">f-end</div>
    ...
</div>
<div>
    <div class="f-none">f-none</div>
    ...
</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</article>