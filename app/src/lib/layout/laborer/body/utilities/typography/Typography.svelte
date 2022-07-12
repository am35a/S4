<script lang="ts">
    import Headings from './headings/Headings.svelte'
</script>

<section>
    <div class="h2" aria-level={2} role="heading">Typography</div>
    <Headings/>

    <small>one small</small>
    <small><small>bouble small</small></small>
    <small><small><small>triple small</small></small></small>

</section>