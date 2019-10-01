<template>
  <v-app>
      <section>
          <v-parallax id="#home" src='./assets/header.jpg' :height="windowHeight">
              <v-toolbar flat class="transparent">
                  <v-container>
                      <v-layout column align-center>
                          <v-toolbar-items class="hidden-xs-only">
                              <v-btn text color="white" @click="goToSection('#why')">About</v-btn>
                              <v-btn text color="white" @click="goToSection('#courses')">Courses</v-btn>
                              <v-btn text color="white" @click="goToSection('#apply')">Apply</v-btn>
                              <v-btn text color="white" @click="goToSection('#team')">Team</v-btn>
                              <v-btn text color="white" @click="goToSection('#contact')">Contact</v-btn>
                          </v-toolbar-items>
                      </v-layout>
                  </v-container>
                  <div class="hidden-sm-and-up text-center">
                      <v-menu bottom left>
                          <template v-slot:activator="{ on }">
                              <v-btn text flat class="transparent" v-on="on">
                                  <v-icon color="white">mdi-menu</v-icon>
                              </v-btn>
                          </template>
                          <v-list>
                              <v-list-item @click="goToSection('#why')">About</v-list-item>
                              <v-list-item @click="goToSection('#courses')">Courses</v-list-item>
                              <v-list-item @click="goToSection('#apply')">Apply</v-list-item>
                              <v-list-item @click="goToSection('#team')">Team</v-list-item>
                              <v-list-item @click="goToSection('#contact')">Contact</v-list-item>
                          </v-list>
                      </v-menu>
                  </div>
              </v-toolbar>
              <v-container class="fill-height mb-10">
                  <v-flex md10 offset-md1 xs12>
                      <v-layout
                              column
                              align-center
                              justfy-center
                              class="white--text"
                      >
                          <h1 class="white--text mb-2 display-3 text-center">Thorly</h1>
                          <p class="font-italic overline">Hammer your fear of coding</p>
                          <br>
                          <p class="text-center">A fresh new concept of training teams and individuals with a focus on industry
                              practicalities</p>
                          <v-btn
                                  class="mt-6"
                                  color="warning"
                                  large
                                  @click="goToSection('#courses')"
                          >
                              BROWSE COURSES
                          </v-btn>
                      </v-layout>
                  </v-flex>
              </v-container>
          </v-parallax>

          <v-card class="main main-raised" hover>
            <v-container>
                <v-content>

                  <section id="#why">
                    <v-container grid-list-xl>
                        <v-layout
                                row
                                wrap
                                class="mt-12"
                                align-center
                                justify-center
                        >
                            <v-flex md10 xs12>
                                <v-card
                                        flat
                                        class="transparent"
                                >
                                    <v-card-title primary-title class="layout justify-center mb-12 ">
                                        <div class="display-1">Why Thorly?</div>
                                    </v-card-title>
                                    <v-card-text>
                                        <p class="text-center text-justify body-1">
                                            We are a team of experienced Data Scientists & Developers and we are looking forward to
                                            bring the same tools to companies and individuals. We split our mission in three parts:
                                            (1) Support Universities, by giving students these tools to allow them to stand out when
                                            reaching the market; (2) Support companies: we all worked as consultants and contractors
                                            and one of our focus is to empower non-technical teams to not rely so much on technical teams.
                                            This should be a benefit for everyone; and (3) Support and engage communities: we believe this
                                            achieved through real-world problems, industry related and solved together with friends,
                                            mentors and a couple of beers.
                                        </p>
                                        <br>
                                        <p class="text-center text-justify body-1">
                                            We thought about these offers to fulfill the main needs of: companies, professionals
                                            and students. Each one of our offers has different targets and therefore a different program
                                            and different goals. We know that studying should be a flexible, self-driven endeauvor, therefore
                                            we are using what we present as a base and adding a tailor-made part in each one of our courses
                                            to fit your specific needs.
                                        </p>

                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex md10 xs12>
                                <v-container grid-list-xl>
                                    <v-layout row wrap align-start>
                                        <v-flex xs12 md6>
                                            <v-card
                                                    flat
                                                    class="transparent"
                                            >

                                                <v-card-text class="text-center">
                                                    <v-icon x-large class="blue--text text--lighten-2">mdi-code-tags</v-icon>
                                                </v-card-text>
                                                <v-card-title primary-title class="layout justify-center">
                                                    <div class="headline text-center ">For Universities</div>
                                                </v-card-title>
                                                <v-card-text class="text-center text-justify">
                                                    One of our efforts is to bring Python to schools. We are making special prices
                                                    and partnerships with different Universities in Portugal. Our main goal is to help
                                                    with the gap between the offer and demand at this level. Our focus is currently
                                                    in the areas of Management and Economics, as this is where we found the biggest gap.
                                                </v-card-text>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs12 md6>
                                            <v-card
                                                    flat
                                                    class="transparent">
                                                <v-card-text class="text-center">
                                                    <v-icon x-large class="green--text text--lighten-2">mdi-code-tags</v-icon>
                                                </v-card-text>
                                                <v-card-title primary-title class="layout justify-center ">
                                                    <div class="headline">For companies</div>
                                                </v-card-title>
                                                <v-card-text class="text-center text-justify">
                                                    Our team has experience in training both companies and organizations in different
                                                    countries and industries, with tailor-made programs, to make it faster to achieve
                                                    the company goals. We have our tested methodology to get the pre-requisites
                                                    necessary to build & start delivering the program in less than 2 weeks.
                                                </v-card-text>
                                            </v-card>
                                        </v-flex>
                                        <!--<v-flex xs12 md4>
                                            <v-card
                                                    flat
                                                    class="transparent">
                                                <v-card-text class="text-center">
                                                    <v-icon x-large class="red&#45;&#45;text text&#45;&#45;lighten-2">mdi-code-tags</v-icon>
                                                </v-card-text>
                                                <v-card-title primary-title class="layout justify-center">
                                                    <div class="headline text-center">Workshops</div>
                                                </v-card-title>
                                                <v-card-text class="text-center text-justify">
                                                    We are building a new concept of workshops in partnership with some
                                                    Portuguese companies, where we will provide a crash course on the specific topics
                                                    necessary to be able to work on the workshop. It will enable networking, developing
                                                    new technical skills and solving real problems. There should be beginners and advanced
                                                    workshops.
                                                </v-card-text>
                                            </v-card>
                                        </v-flex>-->
                                    </v-layout>
                                </v-container>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </section>

                  <section id="#courses">
                    <v-container grid-list-xl>
                        <v-layout
                              row
                              wrap
                              class="mt-12"
                              align-center
                              justify-center
                      >
                            <v-flex md10 xs12>
                                <v-card
                                        flat
                                        class="transparent"
                                >
                                  <v-card-title primary-title class="layout justify-center mb-8">
                                    <div class="display-1">Thorly Courses</div>
                                  </v-card-title>
                                </v-card>
                            </v-flex>
                            <v-flex md10 xs12>
                              <v-container grid-list-xl>
                                <v-layout row wrap align-start>
                                  <v-flex xs6 md6>
                                    <v-card
                                            @click="show1=true, show2=false"
                                            hover
                                            class="transparent"
                                            :color="show1 ? 'grey lighten-3' : ''"
                                            :class="show1 ? 'elevation-10' : ''"
                                    >

                                      <v-card-text class="text-center">
                                        <v-icon x-large class="orange--text text--lighten-2 mt-3">mdi-matrix</v-icon>
                                      </v-card-text>
                                      <v-card-title primary-title class="fix layout justify-center">
                                        <div class="headline text-center mb-6">Introduction to Python</div>
                                      </v-card-title>
                                    </v-card>
                                  </v-flex>
                                  <v-flex xs6 md6>
                                    <v-card
                                            @click="show1=false, show2=true"
                                            hover
                                            class="transparent"
                                            :color="show2 ? 'grey lighten-4' : ''"
                                            :class="show2 ? 'elevation-10' : ''">
                                      <v-card-text class="text-center">
                                        <v-icon x-large class="purple--text text--lighten-2 mt-3">mdi-matrix</v-icon>
                                      </v-card-text>
                                      <v-card-title primary-title class="fix layout justify-center">
                                        <div class="headline text-center mb-6">Python for Data Science</div>
                                      </v-card-title>
                                    </v-card>
                                  </v-flex>
                                </v-layout>
                              </v-container>
                            </v-flex>
                            <v-flex md10 xs12>
                              <IntroPythonCard v-show="show1"/>
                              <PythonDSCard v-show="show2"/>
                            </v-flex>
                        </v-layout>
                    </v-container>
                  </section>

                  <section id="#apply">
                        <v-container grid-list-xl>
                            <v-layout
                                    row
                                    wrap
                                    class="mt-12"
                                    align-center
                                    justify-center
                            >
                                <v-flex md10 xs12>
                                    <v-card flat class="transparent">
                                        <v-card-title primary-title class="layout justify-center mb-12 ">
                                            <div class="display-1">Application process</div>
                                        </v-card-title>
                                        <v-card-text>
                                            <p class="text-justify text-center body-1">
                                                After reaching out to us, we have a well-defined timeline that will let
                                                you get a final proposal of any of our courses in less than 4 weeks, even if you want a
                                                tailor-made program. This application process can change in case your
                                                organisation feel there is a need to. Some of the following processes might take more time
                                                depending on your organisation's complexity and how many layers of approval our proposal has to go.
                                            </p>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex md10 xs12>
                                    <v-container grid-list-xl>
                                        <v-layout row wrap justify-center>
                                            <v-timeline class="d-none d-sm-block">
                                                <v-timeline-item color="blue lighten-2" left fill-dot small>
                                                    <template v-slot:opposite>
                                                        <span>day-0</span>
                                                    </template>
                                                    <v-card class="elevation-2">
                                                        <v-card-title class="fix headline">Send us an email</v-card-title>
                                                        <v-card-text>
                                                            Talk to us via email and give us a brief explanation on what we could help you with.
                                                        </v-card-text>
                                                    </v-card>
                                                </v-timeline-item>
                                                <v-timeline-item color="blue lighten-2" right fill-dot small>
                                                    <template v-slot:opposite>
                                                        <span>day-2</span>
                                                    </template>
                                                    <v-card class="elevation-2">
                                                        <v-card-title class="fix headline">Schedule a call</v-card-title>
                                                        <v-card-text>
                                                            We will get back to you within 48h and give you options to schedule a 15min call.
                                                        </v-card-text>
                                                    </v-card>
                                                </v-timeline-item>
                                                <v-timeline-item color="blue lighten-2" left fill-dot small>
                                                    <template v-slot:opposite>
                                                        <span>day-7</span>
                                                    </template>
                                                    <v-card class="elevation-2">
                                                        <v-card-title class="fix headline">Receive a proposal</v-card-title>
                                                        <v-card-text>
                                                            Based on the pre-requisites that we are able to get from the 15min call we will send you a draft of an educational proposal to be iterated between your Thorly and your organisation.
                                                        </v-card-text>
                                                    </v-card>
                                                </v-timeline-item>
                                                <v-timeline-item color="blue lighten-2" right fill-dot small>
                                                    <template v-slot:opposite>
                                                        <span>day-14</span>
                                                    </template>
                                                    <v-card class="elevation-2">
                                                        <v-card-title class="fix headline">Educational document</v-card-title>
                                                        <v-card-text>
                                                            We should work together to come up with a final document that is able to fulfill your educational needs. To move forward, we should agree, at least, on the following conditions:
                                                            <br>
                                                            <ul>
                                                                <li>Venue</li>
                                                                <li>Starting date</li>
                                                                <li>Operations & Logistics</li>
                                                                <li>Number of students</li>
                                                                <li>Learning outcomes</li>
                                                            </ul>
                                                        </v-card-text>
                                                    </v-card>
                                                </v-timeline-item>
                                                <v-timeline-item color="blue lighten-2" left fill-dot small>
                                                    <template v-slot:opposite>
                                                        <span>day-21</span>
                                                    </template>
                                                    <v-card class="elevation-2">
                                                        <v-card-title class="fix headline">Final proposal and timelines</v-card-title>
                                                        <v-card-text>
                                                            After the document suits everyone’s needs, we will deliver a final
                                                            proposal that all the above mentioned as well as:
                                                            <br>
                                                            <ul>
                                                                <li>Support hours</li>
                                                                <li>In case there is any different from the curriculum proposed by Thorly we will also include the new curriculum</li>
                                                                <li>Final fees - having into consideration the appropriate discounts</li>
                                                                <li>Legal documents necessary from both parties</li>
                                                            </ul>
                                                        </v-card-text>
                                                    </v-card>
                                                </v-timeline-item>
                                            </v-timeline>
                                            <v-timeline class="d-sm-none mr-4 ml-n4" dense>
                                                <v-timeline-item color="blue lighten-2" left fill-dot small>
                                                    <v-card class="elevation-2">
                                                        <v-card-title class="fix headline">Send us an email</v-card-title>
                                                        <v-card-text>
                                                            Talk to us via email and give us a brief explanation on what we could help you with.
                                                            <br><br>
                                                            <div class="text-right">
                                                                <small>day 0</small>
                                                            </div>
                                                        </v-card-text>
                                                    </v-card>
                                                </v-timeline-item>
                                                <v-timeline-item color="blue lighten-2" right fill-dot small>
                                                    <v-card class="elevation-2">
                                                        <v-card-title class="fix headline">Schedule a call</v-card-title>
                                                        <v-card-text>
                                                            We will get back to you within 48h and give you options to
                                                            schedule a 15min call.
                                                            <br><br>
                                                            <div class="text-right">
                                                                <small>day 2</small>
                                                            </div>
                                                        </v-card-text>

                                                    </v-card>
                                                </v-timeline-item>
                                                <v-timeline-item color="blue lighten-2" left fill-dot small>
                                                    <v-card class="elevation-2">
                                                        <v-card-title class="fix headline">Receive a proposal</v-card-title>
                                                        <v-card-text>
                                                            Based on the pre-requisites that we are able to get from the 15min call we will send you a draft of an educational proposal to be iterated between your Thorly and your organisation.
                                                            <br><br>
                                                            <div class="text-right">
                                                                <small>day 7</small>
                                                            </div>
                                                        </v-card-text>
                                                    </v-card>
                                                </v-timeline-item>
                                                <v-timeline-item color="blue lighten-2" right fill-dot small>
                                                    <v-card class="elevation-2">
                                                        <v-card-title class="fix headline">Educational document</v-card-title>
                                                        <v-card-text>
                                                            We should work together to come up with a final document that is able to fulfill your educational needs. To move forward, we should agree, at least, on the following conditions:
                                                            <br>
                                                            <ul>
                                                                <li>Venue</li>
                                                                <li>Starting date</li>
                                                                <li>Operations & Logistics</li>
                                                                <li>Number of students</li>
                                                                <li>Learning outcomes</li>
                                                            </ul>
                                                            <br><br>
                                                            <div class="text-right">
                                                                <small>day 14</small>
                                                            </div>
                                                        </v-card-text>
                                                    </v-card>
                                                </v-timeline-item>
                                                <v-timeline-item color="blue lighten-2" left fill-dot small>
                                                    <v-card class="elevation-2">
                                                        <v-card-title class="fix headline">Final proposal and timelines</v-card-title>
                                                        <v-card-text>
                                                            After the document suits everyone’s needs, we will deliver a final
                                                            proposal that all the above mentioned as well as:
                                                            <br>
                                                            <ul>
                                                                <li>Support hours</li>
                                                                <li>In case there is any different from the curriculum proposed by Thorly we will also include the new curriculum</li>
                                                                <li>Final fees - having into consideration the appropriate discounts</li>
                                                                <li>Legal documents necessary from both parties</li>
                                                            </ul>
                                                            <br><br>
                                                            <div class="text-right">
                                                                <small>day 21</small>
                                                            </div>
                                                        </v-card-text>
                                                    </v-card>
                                                </v-timeline-item>
                                            </v-timeline>
                                        </v-layout>
                                    </v-container>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </section>

                  <section id="#team">
                    <v-container grid-list-xl>
                      <v-layout
                              row
                              wrap
                              class="mt-12"
                              align-center
                              justify-center
                      >
                        <v-flex md10 xs12>
                          <v-card flat class="transparent">
                            <v-card-title primary-title class="layout justify-center mb-8 ">
                              <div class="display-1">Our team</div>
                            </v-card-title>
                          </v-card>
                        </v-flex>
                        <v-flex md10 xs12>
                          <v-container grid-list-xl>
                            <v-layout row wrap align-start>
                              <v-flex md4 xs12>
                                <v-card flat class="transparent">
                                  <v-card-text class="text-center">
                                    <v-avatar size="150">
                                      <img src="./assets/img/faces/nuno.jpeg" alt="Nuno">
                                    </v-avatar>
                                  </v-card-text>
                                  <v-card-title primary-title class="layout justify-center">
                                    <div class="fix headline text-center mb-n2">Nuno Reis</div>
                                  </v-card-title>
                                  <v-card-title class="layout justify-center">
                                    <div class="fix text-center body-2 mb-4">Data Scientist & Python developer</div>
                                  </v-card-title>
                                  <v-card-text class="text-justify">
                                    Nuno started his career as top student in Instituto Superior Técnico, where
                                    he did research for two years and later decided to move to the industry.
                                    Worked for three years as consultant at Teixeira Duarte, developing several
                                    open source projects in-between for real-estate investment and commercial trades.
                                    Currently with his own startup, focused on building a product to fight churn for
                                    the financial industry as well as providing consulting in the areas of data science,
                                    development and data architecture.
                                  </v-card-text>
                                </v-card>
                              </v-flex>
                              <v-flex md4 xs12 >
                                <v-card flat class="transparent">
                                  <v-card-text class="text-center">
                                    <v-avatar size="150">
                                      <img src="./assets/img/faces/luis.jpeg" alt="Luís">
                                    </v-avatar>
                                  </v-card-text>
                                  <v-card-title primary-title class="layout justify-center">
                                    <div class="fix headline text-center mb-n2">Luís Sousa</div>
                                  </v-card-title>
                                  <v-card-title class="layout justify-center">
                                    <div class="fix text-center body-2 mb-4">Mathematician, Data Scientist &<br>full-stack developer</div>
                                  </v-card-title>
                                  <v-card-text class="text-justify">
                                    Luís has been working with technology for more than 10 years. Currently he
                                    is a Data Scientist at OutSystems and he is teaching Python, in a post-graduation
                                    at Rumos. Besides Mathematics, Luís has been evolved with Physics and radiation
                                    for the last 4 years, where he developed software to be deployed in Africa for
                                    the oil and gas industry. Luís has been teaching since he left college, helping in
                                    several Master's and PhD thesis, teaching different stacks and nationalities.
                                  </v-card-text>
                                </v-card>
                              </v-flex>
                              <v-flex md4 xs12>
                                <v-card flat class="transparent">
                                  <v-card-text class="text-center">
                                    <v-avatar size="150">
                                      <img src="./assets/img/faces/ricardo.jpeg" alt="Ricardo">
                                    </v-avatar>
                                  </v-card-text>
                                  <v-card-title primary-title class="layout justify-center">
                                    <div class="fix headline text-center mb-n2">Ricardo Pereira</div>
                                  </v-card-title>
                                  <v-card-title class="layout justify-center">
                                    <div class="fix text-center body-2 mb-4">Data Scientist & Python developer</div>
                                  </v-card-title>
                                  <v-card-text class="text-justify">
                                    Ricardo has co-founded different organisations and companies, to help
                                    solving problems that are data related and enhancing different communities.
                                    Currently teaching Python at Nova SBE (Portugal), Machine Learning at European Leadership University (Holland)
                                    and Data Collection at Rumos, Ricardo has experienced different crowds and
                                    tested different teaching methodologies. On the industry, Ricardo has been
                                    contracting for two years, working closely with some of the biggest tech companies in
                                    Portugal.
                                  </v-card-text>
                                </v-card>
                              </v-flex>
                            </v-layout>
                          </v-container>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </section>

                  <section id="#contact">
                      <v-container grid-list-xl>
                          <v-layout
                                  row
                                  wrap
                                  justify-center
                                  class="mt-12">
                              <v-flex md10 xs12>
                                  <v-card flat class="transparent">
                                      <v-card-title primary-title class="layout justify-center mb-12">
                                          <div class="display-1">Work with us</div>
                                      </v-card-title>
                                      <v-card-text>
                                          <p class="text-center body-1">
                                              Reach out and let us know what your needs are. We will get back to you and schedule a
                                              call with your team ASAP.
                                          </p>
                                      </v-card-text>
                                      <v-layout
                                              row
                                              wrap
                                              justify-center>
                                      <v-flex lg4 md5 sm7 xs12>
                                      <v-card flat class="text-right transparent mt-n5">
                                          <v-list class="transparent">
                                              <v-list-item>
                                                  <v-list-item-action>
                                                      <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                                                  </v-list-item-action>
                                                  <v-list-item-content>
                                                      <v-list-item-title>+351 918 548 827</v-list-item-title>
                                                  </v-list-item-content>
                                              </v-list-item>
                                              <v-list-item>
                                                  <v-list-item-action>
                                                      <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>
                                                  </v-list-item-action>
                                                  <v-list-item-content>
                                                      <v-list-item-title>Lisbon, Portugal</v-list-item-title>
                                                  </v-list-item-content>
                                              </v-list-item>
                                              <v-list-item>
                                                  <v-list-item-action>
                                                      <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                                                  </v-list-item-action>
                                                  <v-list-item-content>
                                                      <v-list-item-title>ncmreis@gmail.com</v-list-item-title>
                                                  </v-list-item-content>
                                              </v-list-item>
                                          </v-list>
                                      </v-card>
                                      </v-flex>
                                      </v-layout>
                                  </v-card>
                              </v-flex>
                          </v-layout>
                      </v-container>
                  </section>

                </v-content>
            </v-container>
          </v-card>

          <v-parallax src='./assets/header.jpg' height="100">
              <v-container>
                  <v-layout
                          column
                          align-center
                          class="white--text"
                  >
                      <v-app-bar flat class="transparent">
                          <v-toolbar-items>
                              <v-btn text color="white" @click="goToSection('#home')" class="mt-4">
                                  Thorly<v-icon small>mdi-copyright</v-icon>2019
                              </v-btn>
                          </v-toolbar-items>
                      </v-app-bar>
                  </v-layout>
              </v-container>
          </v-parallax>

      </section>
  </v-app>
</template>

<script>
import FormHome from './components/FormHome';
import IntroPythonCard from './components/IntroPythonCard';
import PythonDSCard from './components/PythonDSCard';

export default {
  name: 'App',
  components: {
      FormHome,
      IntroPythonCard,
      PythonDSCard
  },
  data () {
    return {
        items: [
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me 2' },
        ],
        hashSection: null,
        windowHeight: 0,
        show1: true,
        show2: false
    }
  },
  methods: {
      goToSection(hashSection) {
          var elmnt = document.getElementById(hashSection);
          elmnt.scrollIntoView({behavior: 'smooth'});
      },
      menuItems() {
          return this.menu
      },
      handleResize() {
          this.windowHeight = window.innerHeight;
      }
  },
    created: function() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize();
    },

    destroyed: function() {
        window.removeEventListener('resize', this.handleResize)
    },

    computed: {
        headerStyle() {
            return {
                backgroundImage: 'url(./assets/header.jpg)'
            };
        }
    }
};
</script>

<style lang="scss" scoped>
.main{
    background: #FFFFFF;
    position: relative;
    z-index: 3;
}

.main-raised{
    margin: -60px 5px -30px;
}

.fix {
    overflow-wrap: anywhere;
    word-wrap: break-word;
    word-break: normal;
    hyphens: auto;
}
</style>

