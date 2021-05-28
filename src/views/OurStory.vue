<template>
  <div>
    <div class="image-and-text">
      <v-img
        src="../assets/images/engagement-pictures/106.jpeg"
        class="image-center" />
      <div class="image-text">
        <h1 class="hidden-sm-and-down">Our Story</h1>
      </div>
    </div>
    <h1 class="hidden-md-and-up">Our Story</h1>
    <v-layout>
      <v-col>
        <h2 class="page-top-padding hidden-sm-and-down">Eagan</h2>
        <h2 class="hidden-md-and-up">Eagan</h2>
        <div class="our-story-text">
          Although Haley and Zach both grew up in the same hometown, their paths
          only crossed a handful of times. Since they both swam for Eagan they
          knew of each other, but beyond that they seldom saw one another.
        </div>
        <h2>Gustavus</h2>
        <div class="our-story-text">
          Haley went off to college in the fall of 2015, leaving her high school
          memories, and Zach, since he was starting his senior year of high
          school, behind. When Zach toured colleges, he visited Gustavus and
          loved the experience. Zach decided to attend Gustavus.
        </div>
        <div class="our-story-text">
          In the fall of 2016, Zach arrived at Gustavus and joined the swim
          team. Both Haley and Zach swam in the distance training group, so they saw each
          other almost daily at practices. They also both studied computer
          science, so Haley offered to help Zach with homework if he ever needed
          it. Zach took her up on this offer a few times. The more time they
          spent together, the fonder they grew of one another. They went on
          their first date one chilly Thursday evening after practice, and made
          their relationship official on December 3, 2016.
        </div>
        <img
          src="../assets/images/our-story/ZachAndHaleyFirstDate.jpeg"
          class="image-center our-story-image" />
        <div class="our-story-text">
          Over the coming months and years, Haley and Zach grew a strong
          connection and love for one another. They were each other's biggest
          cheerleaders in the pool, and best study partners in the classroom.
          The two spent their college years not only swimming and studying
          together, but playing cribbage, going to church and Proclaim, eating
          meals in the caf, watching Netflix, walking in the Arb, and so much
          more.
        </div>
        <img
          src="../assets/images/our-story/ZachAndHaleySwimming.jpeg"
          class="image-center our-story-image" />
        <div class="our-story-text">
          After college, Haley and Zach spent a lot more time with each other's
          families. Most of the time they would have game nights, and they would
          regularly play Catan, Kan Jam, Spike Ball, and card games. The two
          grew closer and closer with each other's families until they were like
          their own.
        </div>
        <h2>Proposal</h2>
        <div class="our-story-text">
          On August 9, 2020, Zach took Haley to Fort Snelling State Park for a
          hike. With each step they took, the ring in Zach's pocket became
          looser and looser until it broke free to jingle inside of the box as
          they walked. Haley was sure to notice the sound, and realizing what it
          was, made sure to keep quiet as not to ruin the moment or surprise. It
          was a gloomy day and was sprinkling on and off throughout the hike,
          but the sky cleared as the two reached a sandy area where the
          Minnesota and Mississippi rivers converge. While Haley was looking the
          other way, Zach got down on one knee. When Haley turned around, Zach
          asked her to spend the rest of her life with him. Of course, she said
          "Yes!" Right where two rivers became one, they committed to making
          their two lives one with Christ.
        </div>
        <img
          src="../assets/images/our-story/ZachAndHaleyProposal.jpeg"
          class="image-center our-story-image" />
      </v-col>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "OurStory",
};
</script>

<style scoped>
.image-and-text {
  text-align: center;
  position: relative;
}

.image-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.image-text {
  display: block;
  position: absolute;
  top: 0px;
  margin-left: auto;
  margin-right: auto;
  color: #2e2e2e;
  width: 100%;
}

h2 {
  padding-bottom: 16px;
}

.col {
  padding: 0 24px 0 24px;
}

.our-story-text {
  font-family: "OpenSerif";
  font-size: 15px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 16px;
}

.our-story-image {
  max-width: 600px;
  padding-bottom: 16px;
}

.page-top-padding {
  padding-top: 24px;
}
</style>
