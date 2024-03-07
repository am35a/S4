<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<article>
    <h2 id="float">Float</h2>
    <p>
        Use <b>fx-...</b> classes to floats any element across any breakpoint.
    </p>
    <div class="alert alert-warning justify-self--start">
        * Pay attention the <b>fx-start</b> and <b>fx-end</b> classes do not support by invalid browsers like Chrome or Safari.
    </div>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive br-md">
        <div class="bgc-negative-10 p-2">
            <div class="fx-left bgc-negative-10 p-2">fx-left</div>
            Unde quae consequatur optio, saepe, harum modi nobis excepturi cum ducimus minima architecto tenetur laudantium quaerat rem fuga nihil nemo distinctio beatae minus, rerum voluptate vel facere. Corporis, blanditiis inventore!
        </div>
        <div class="bgc-negative-10 p-2">
            <div class="fx-right bgc-negative-10 p-2">fx-right</div>
            Dicta modi eaque, commodi delectus sint enim perspiciatis, cupiditate inventore sequi beatae pariatur at earum perferendis eius doloribus blanditiis minima temporibus voluptates. Possimus assumenda quasi, quaerat id molestiae nihil sint.
        </div>
        <div class="bgc-negative-10 p-2">
            <div class="fx-start bgc-negative-10 p-2">fx-start *</div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam sequi provident dolores impedit, excepturi eaque dolore, sint, quasi qui voluptatum culpa adipisci ad non. Libero perspiciatis illo error porro ea?
        </div>
        <div class="bgc-negative-10 p-2">
            <div class="fx-end bgc-negative-10 p-2">fx-end *</div>
            Voluptates recusandae libero nostrum molestiae commodi minus doloribus, dignissimos ratione sint atque tenetur est quam, magni quae consequatur deserunt optio pariatur architecto! Non eaque animi ab qui officia nam vel.
        </div>
        <div class="bgc-negative-10 p-2">
            <div class="fx-none bgc-negative-10 p-2">fx-none</div>
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
    <div class="fx-start">fx-start</div>
    ...
</div>
<div>
    <div class="fx-end">fx-end</div>
    ...
</div>
<div>
    <div class="fx-none">fx-none</div>
    ...
</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</article>