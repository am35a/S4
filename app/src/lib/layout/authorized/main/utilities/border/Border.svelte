<script lang="ts">
    import SectionWidth from './width/Width.svelte'
    import SectionStyle from './style/Style.svelte'
    import SectionColor from './color/Color.svelte'
    import SectionRadius from './radius/Radius.svelte'
    import SectionSpacing from './spacing/Spacing.svelte'

    import AnchorNavigation from 'src/lib/layout/components/AnchorNavigation.svelte'
</script>

<article>
    <h2 id="border">Border</h2>
    <SectionWidth />
    <SectionStyle />
    <SectionColor />
    <SectionRadius />
    <SectionSpacing />

    <div class="p-sticky b-0 p-2">
        <AnchorNavigation
            anchorsObj={{
                width: 'Width',
                style: 'Style',
                color: 'Color',
                radius: 'Radius',
                spacing: 'Spacing'
            }}
        />
    </div>
</article>