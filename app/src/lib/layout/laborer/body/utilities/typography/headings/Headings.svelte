<script lang="ts">
    import Heading from 'src/components/Heading.svelte'
</script>
<div class="d-grid g-2">
    <Heading level={3}>Headings</Heading>
    <div
        class="d-inline-grid cols g-2 justify-self-start align-items-center"
        style="--cols-tl: auto auto;"
    >
        <div>Heading</div><div>Example</div>
        <code>&lt;h1&gt;&lt;/h1&gt;</code><h1>Heading - 1</h1>
        <code>&lt;h2&gt;&lt;/h2&gt;</code><h2>Heading - 2</h2>
        <code>&lt;h3&gt;&lt;/h3&gt;</code><h3>Heading - 3</h3>
        <code>&lt;h4&gt;&lt;/h4&gt;</code><h4>Heading - 4</h4>
        <code>&lt;h5&gt;&lt;/h5&gt;</code><h5>Heading - 5</h5>
        <code>&lt;h6&gt;&lt;/h6&gt;</code><h6>Heading - 6</h6>
    </div>
</div>