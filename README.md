<p align="center">
  <a href="https://heyatom.dev"><img src="assets/header.svg" alt="Andrea Tombolato, full-stack developer in Milan" width="100%"></a>
</p>

<p align="center">
  <a href="https://heyatom.dev"><b>heyatom.dev</b></a> ·
  <a href="https://www.linkedin.com/in/atombolato">LinkedIn</a> ·
  <a href="mailto:hey@heyatom.dev">hey@heyatom.dev</a>
</p>

---

By day I build **Meview** at [Medas Solutions](https://medas-solutions.it/): the patient portal dozens of Italian hospitals and labs use to publish medical reports and collect exam consents. Java and Vue/Nuxt, GDPR-bound health data, SPID/CIE login, digital signature, HL7.

By night I run my own small platform: a set of NestJS services that handle auth, mail, content, media and events, so every new side project starts with the boring parts already done.

## The platform

```mermaid
flowchart LR
    apps["DBD Builds<br/>and other apps"] --> platform
    meridian["Meridian<br/>admin console · Nuxt"] --> platform

    subgraph platform["heyatom · NestJS + Prisma + PostgreSQL"]
        bastion["Bastion<br/>identity · JWT RS256 · OAuth · 2FA"]
        herald["Herald<br/>mail"]
        articuno["Articuno<br/>CMS"]
        fileharbor["FileHarbor<br/>media CDN"]
        gatherly["Gatherly<br/>events"]
        beacon["Beacon<br/>Twitch monitor"]
        bastion -. service JWT .-> herald
        bastion -. service JWT .-> gatherly
    end
```

## Projects

| | Project | What it is | Stack |
|---|---|---|---|
| 🎮 | **[DBD Builds](https://dbd-builds.it)** | Dead by Daylight build sharing and translated wiki. 500+ builds, ~1k visitors a month | NestJS · Nuxt · Vuetify |
| 🗂️ | **[FileHarbor](https://github.com/andreacw5/fileharbor)** | Multi-tenant image and media CDN with albums and avatars | NestJS · Prisma |
| 📝 | **[Articuno](https://github.com/heyatomdev/articuno)** | Headless CMS with translations, moderation and webhooks | NestJS · Prisma |
| 📅 | **[Gatherly](https://github.com/heyatomdev/gatherly)** | Event API with i18n, recurrence and signed webhooks | NestJS · Prisma |
| 🔗 | **[Ziplink](https://github.com/andreacw5/ziplink)** | URL shortener with click stats and custom codes | NestJS · Prisma |

## Stack

![Java](https://img.shields.io/badge/-Java-black?style=flat-square&logo=openjdk)
![TypeScript](https://img.shields.io/badge/-TypeScript-black?style=flat-square&logo=typescript)
![NestJS](https://img.shields.io/badge/-NestJS-black?style=flat-square&logo=nestjs)
![Quarkus](https://img.shields.io/badge/-Quarkus-black?style=flat-square&logo=quarkus)
![Prisma](https://img.shields.io/badge/-Prisma-black?style=flat-square&logo=prisma)
![Nuxt](https://img.shields.io/badge/-Nuxt-black?style=flat-square&logo=nuxt)
![Vue](https://img.shields.io/badge/-Vue-black?style=flat-square&logo=vue.js)
![Vuetify](https://img.shields.io/badge/-Vuetify-black?style=flat-square&logo=vuetify)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-black?style=flat-square&logo=postgresql)
![Docker](https://img.shields.io/badge/-Docker-black?style=flat-square&logo=docker)
![NGINX](https://img.shields.io/badge/-NGINX-black?style=flat-square&logo=nginx)
![GitHub Actions](https://img.shields.io/badge/-GitHub_Actions-black?style=flat-square&logo=githubactions)

## Off the keyboard

- 🚨 Civil protection volunteer since 2014: team leader in Settimo Milanese for twelve years, now in Milan.
- 🕹️ Technical manager and board member at [Element Gaming](https://element-gaming.eu) since 2019.
