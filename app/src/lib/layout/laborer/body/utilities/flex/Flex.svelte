<script lang="ts">
    import SectionDisplay from './display/Display.svelte'
    import SectionDirection from './direction/Direction.svelte'
    import SectionWrap from './wrap/Wrap.svelte'
    import SectionSize from './size/Size.svelte'
    import SectionGrow from './grow/Grow.svelte'
    import SectionBasis from './basis/Basis.svelte'
</script>

<article class="d-grid g-2">
    <h2 id="flex">Flex</h2>
    <SectionDisplay />
    <SectionDirection />
    <SectionWrap />
    <SectionSize />
    <SectionGrow />
    <SectionBasis />
</article>