<script>
    import Precode from 'component/Precode.svelte'
</script>

<section>
    <h3 id="transform">Transform</h3>
    <p>
        Standard text manipulation
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid margin-bottom--md padding--sm background-color--positive border-radius--md">
                <div>Simple text before <strong>strong</strong> and after.</div>
                <div>Simple text before <i>italik</i> and after.</div>
                <div>Simple text before <sub>sub</sub> and after.</div>
                <div>Simple text before <sup>sup</sup> and after.</div>
                <div>Simple text before <small>small</small> and after.</div>
            </div>
            <div class="display--grid margin-bottom--md padding--sm background-color--positive border-radius--md">
                <div>Simple text before <span class="text-transform--lowercase">LOWERCASE</span> and after.</div>
                <div>Simple text before <span class="text-transform--uppercase">uppercase</span> and after.</div>
                <div>Simple text before <span class="text-transform--capitalize">capitalize</span> and after.</div>
            </div>
            <div class="display--grid margin-bottom--md padding--sm background-color--positive border-radius--md">
                <div>Simple text before <span class="text-decoration--underline">underline</span> and after.</div>
                <div>Simple text before <span class="text-decoration--line-through">line-through</span> and after.</div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {
`<strong>strong</strong>
<i>italik</i>
<sub>sub</sub>
<sup>sup</sup>
<small>small</small>

<span class="text-transform--lowercase">LOWERCASE</span>
<span class="text-transform--uppercase">uppercase</span>
<span class="text-transform--capitalize">capitalize</span>

<span class="text-decoration--underline">underline</span>
<span class="text-decoration--line-through">line-through</span>
`
                }
            </Precode>
        </div>
    </div>
</section>