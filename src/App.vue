<template>
  <v-app>
    <v-layout class="overflow-div">
      <div class="navigation-drawer-wrapper"
           v-bind:class="{
        'display-none':$vuetify.breakpoint.smAndDown
      }">
        <!--navigation drawer-->
        <v-navigation-drawer permanent
                             dark
                             :width="260"
                             class="px-3 drawer-background">
          <div class="opacity-background"></div>
          <v-toolbar flat
                     class="toolbar-height">
            <v-list class="toolbar-title-height">
              <v-list-tile avatar>
                <div class="logo-grid mr-2 display-f align-center">
                  <div class="logo"></div>
                </div>
                <v-list-tile-title class="title font-weight-regular">
                  Vuetify MD
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-toolbar>
          <v-divider class="mb-4 mt-1"></v-divider>
          <v-list class="pt-0 list-background">
            <v-list-tile v-for="item in drawerItems"
                         :key="item.title"
                         @click=""
                         class="mb-2">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="font-weight-light">{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon>backup</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Upgrade To PRO</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
      </div>
      <!--navigation drawer-->

      <v-flex class="whole-wrapper">
        <v-toolbar class="pt-1">
          <v-btn icon
                 flat>
            <v-icon size="20px">view_list</v-icon>
          </v-btn>
          <v-toolbar-title class="font-weight-thin ml-0">Dashboard</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="toolbar-btn-wrapper">
            <v-layout class="y-center">
              <v-text-field style="width:146px"
                            class="input mr-3"
                            label="Search..."></v-text-field>

              <v-btn class="mr-2 toolbar-btn"
                     icon>
                <v-icon size="20px">dashboard</v-icon>
              </v-btn>

              <v-menu transition="slide-y-transition"
                      offset-y
                      bottom>
                <template v-slot:activator="{ on }">
                  <v-badge overlap
                           color="red">
                    <template v-slot:badge
                              class="badge-style">5
                    </template>
                    <v-btn icon
                           v-on="on">
                      <v-icon size="20px">notification_important</v-icon>
                    </v-btn>
                  </v-badge>
                </template>
                <v-list dense>
                  <v-list-tile v-for="(item, i) in dropdown_edit"
                               :key="i"
                               @click="">
                    <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>

              <v-btn icon>
                <v-icon size="20px">person</v-icon>
              </v-btn>

            </v-layout>

          </v-toolbar-items>
        </v-toolbar>
        <v-content>
          <HelloWorld />
        </v-content>
        <v-footer style="height:82px"
                  class="pa-3 footer-height">
          <div class="caption pa-3 footer-btn font-weight-medium">HOME</div>
          <div class="caption pa-3 footer-btn font-weight-medium">CREATIVE TIM</div>
          <div class="caption pa-3 footer-btn font-weight-medium">ABOUT US</div>
          <div class="caption pa-3 footer-btn font-weight-medium">BLOG</div>
          <v-spacer></v-spacer>
          <div class="subheading font-weight-light">© 2019 <span class="creative-tim">Creative Tim</span>, made with <v-icon small>favorite</v-icon> for a better web</div>

        </v-footer>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script lang='ts' src='./App.ts'/>

<style lang="scss" scoped>
.v-badge--overlap {
  &.v-badge__badge {
    top: -100px !important;
  }
}
.v-menu__content.theme--light.menuable__content__active {
  min-width: 50px !important;
  top: 59px !important;
  left: 1125px !important;
  // transform-origin: left top !important;
  z-index: 8 !important;
  position: absolute !important;
}
.v-toolbar {
  height: 70px;
}
.overflow-div {
  overflow-y: hidden;
  height: 100vh;
}
.toolbar-btn {
  .v-btn--icon {
    border-radius: 10px !important;
  }
}
.y-center {
  align-items: center;
}
.v-list__tile__action {
  // min-width: 40px;
}
.logo {
  width: 20px;
  height: 20px;
  background-image: url("https://demos.creative-tim.com/vuetify-material-dashboard/img/vuetifylogo.png");
  background-size: contain;
}
.logo-grid {
  width: 53px !important;
  height: 40px;
  border-radius: 50%;
  background: white;
  background-position: center;
  object-fit: contain;
}
.opacity-background {
  background: rgba($color: #000000, $alpha: 0.5);
  z-index: -10;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
}
.list-background {
  background: none;
  .v-list__tile--link {
    background: black;
  }
}
.drawer-background {
  background: url("https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.badge-style {
  border: 1px solid white;
}
.footer-btn {
  cursor: pointer;
  color: #495057;
  &:hover {
    color: #9c27b0;
  }
}
.creative-tim {
  cursor: pointer;
  color: #9c27b0;
}
.footer-height {
  border-top: 1px solid #e7e7e7;
}
.v-label {
  color: #495057;
  font-size: 14px;
}
.display-f {
  display: flex;
}
.align-center {
  justify-content: center;
  align-items: center;
}
.v-content {
  background: #f5f5f5;
  min-height: 900px;
}
.toolbar-title-height {
  height: 70px;
}
.v-toolbar {
  box-shadow: none;
}
element {
  .style {
    height: 0;
  }
}
.toolbar-height {
  background: none;
  element {
    &.style {
      height: 0;
    }
  }
}
.v-toobar__content {
  height: 70px !important;
}
.navigation-drawer-wrapper {
  overflow-y: hidden;
  max-width: 260px;
  min-width: 260px;
  height: 100vh;
}
.display-none {
  display: none;
}
.whole-wrapper {
  overflow-y: auto;
}
</style>

