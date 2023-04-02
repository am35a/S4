<script lang="ts">
    // https://github.com/svelteuidev/svelteui/blob/main/packages/svelteui-core/src/components/Input/Input.svelte
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input

    // https://nikitahl.com/custom-styled-input-type-file

    // import Input from 'component/Input.svelte'
    
    // import Icon from 'component/Icon.svelte'
    // import Button from 'component/Button.svelte'
    // import Precode from 'component/Precode.svelte'

    import SectionFile from './file/File.svelte'
    import SectionText from './text/Text.svelte'
    import SectionBox from './box/Box.svelte'
</script>

<article>
    <h2 class="forms">Forms</h2>
    <p>S4 forms have many variants and colors. From these list, you can get info of all avaliable kind of forms.</p>
    <div class="d-grid cols-3 g-1 d-none">
        <div>FrmBtn - type button</div>
        <div>FrmChk - 2 type checkbox</div>
        <div>FrmClr - type color</div>
        <div>FrmDat - 1 type date</div>
        <div>FrmDtl - 1 type datetime-local</div>
        <div>FrmEml - 1 type email</div>
        <div>FrmFil - 3 type file</div>
        <div>FrmHdn - type hidden</div>
        <div>FrmImg - type image</div>
        <div>FrmMon - 1 type month</div>
        <div>FrmNum - type number</div>
        <div>FrmPas - 1 type password</div>
        <div>FrmRad - 2 type radio</div>
        <div>FrmRng - type range</div>
        <div>FrmRst - type reset</div>
        <div>FrmSrc - type search</div>
        <div>FrmSbm - type submit</div>
        <div>FrmTel - 1 type tel</div>
        <div>FrmTxt - 1 type text</div>
        <div>FrmTim - 1 type time</div>
        <div>FrmUrl - 1 type url</div>
        <div>FrmWek - 1 type week</div>
    </div>

    <SectionFile/>
    <SectionText/>
    <SectionBox/>
</article>