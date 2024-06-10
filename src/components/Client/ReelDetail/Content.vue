<template>
  <div class="CommentContainer">
    <div class="CommentListContainer">
      <Profie />
      <div class="mt-6">
        <CommentItem
          avatarUrl="https://p16-capcut-sign-va.ibyteimg.com/tos-alisg-v-643f9f/oQAv6ZrtFEBIrYkkPABLOiH6RASUGiEZAQQAG~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1738432706&x-signature=ZwVytvj8%2FvJaeubATGkmOI2yBZg%3D"
          userName="cmt-1"
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum numquam repellendus quae. Itaque hic, aperiam atque nobis aliquam cumque magnam officia provident facere reiciendis maxime minus soluta, tenetur perferendis culpa?"
        />
        <CommentItem
          avatarUrl="https://p16-capcut-sign-va.ibyteimg.com/tos-alisg-v-643f9f/oQAv6ZrtFEBIrYkkPABLOiH6RASUGiEZAQQAG~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1738432706&x-signature=ZwVytvj8%2FvJaeubATGkmOI2yBZg%3D"
          userName="cmt-2"
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum numquam repellendus quae. Itaque hic, aperiam atque nobis aliquam cumque magnam officia provident facere reiciendis maxime minus soluta, tenetur perferendis culpa?"
        />
        <CommentItem
          avatarUrl="https://p16-capcut-sign-va.ibyteimg.com/tos-alisg-v-643f9f/oQAv6ZrtFEBIrYkkPABLOiH6RASUGiEZAQQAG~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1738432706&x-signature=ZwVytvj8%2FvJaeubATGkmOI2yBZg%3D"
          userName="cmt-2"
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum numquam repellendus quae. Itaque hic, aperiam atque nobis aliquam cumque magnam officia provident facere reiciendis maxime minus soluta, tenetur perferendis culpa?"
        />
        <CommentItem
          avatarUrl="https://p16-capcut-sign-va.ibyteimg.com/tos-alisg-v-643f9f/oQAv6ZrtFEBIrYkkPABLOiH6RASUGiEZAQQAG~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1738432706&x-signature=ZwVytvj8%2FvJaeubATGkmOI2yBZg%3D"
          userName="cmt-2"
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum numquam repellendus quae. Itaque hic, aperiam atque nobis aliquam cumque magnam officia provident facere reiciendis maxime minus soluta, tenetur perferendis culpa?"
        />
        <CommentItem
          avatarUrl="https://p16-capcut-sign-va.ibyteimg.com/tos-alisg-v-643f9f/oQAv6ZrtFEBIrYkkPABLOiH6RASUGiEZAQQAG~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1738432706&x-signature=ZwVytvj8%2FvJaeubATGkmOI2yBZg%3D"
          userName="cmt-2"
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum numquam repellendus quae. Itaque hic, aperiam atque nobis aliquam cumque magnam officia provident facere reiciendis maxime minus soluta, tenetur perferendis culpa?"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Profie from './_components/Profie.vue'
import CommentItem from './_components/CommentItem.vue'
</script>

<style scoped>
.CommentContainer {
  width: 100%;
  box-sizing: border-box;
  border-top: none;
  border-bottom: 1px solid rgba(22, 24, 35, 0.2);
  overflow: hidden;
  -webkit-box-flex: 1;
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
}

.CommentListContainer:first-of-type {
  padding-top: 24px;
}
.CommentListContainer {
  width: 100%;
  overflow: hidden auto;
  -webkit-box-flex: 1;
  flex-grow: 1;
  position: relative;
  padding: 0px 32px 24px;
}
</style>
