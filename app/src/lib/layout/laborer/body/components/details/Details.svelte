<script lang="ts">
    import Icon from "src/components/Icon.svelte"
    import Details from "src/components/Details.svelte"
    import Precode from "src/components/Precode.svelte"
</script>

<section>
    <div class="h2" aria-level={2} role="heading">Details</div>
    <div class="d-grid">
        <Details>
            <svelte:fragment slot="title">
                Title
            </svelte:fragment>
            <svelte:fragment slot="body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat aperiam minus qui culpa a voluptas voluptatibus perspiciatis corporis libero suscipit et sit sed inventore optio tempore earum placeat quisquam.
            </svelte:fragment>
        </Details>
    </div>
</section>