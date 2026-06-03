const header = document.querySelector("[data-header]");
const filters = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll("[data-category]");
const dialog = document.querySelector("[data-dialog]");
const closeDialog = document.querySelector("[data-close]");
const dialogVideo = dialog.querySelector("[data-dialog-video]");
const biliPlayer = dialog.querySelector("[data-bili-player]");
const biliFrame = dialog.querySelector("[data-bili-frame]");
const videoStatus = dialog.querySelector("[data-video-status]");
const fullPlay = dialog.querySelector("[data-full-play]");
const worksDialog = document.querySelector("[data-works-dialog]");
const openWorks = document.querySelector("[data-open-works]");
const closeWorks = document.querySelector("[data-works-close]");
const contactDialog = document.querySelector("[data-contact-dialog]");
const openContact = document.querySelector("[data-open-contact]");
const closeContact = document.querySelector("[data-contact-close]");
const servicesDialog = document.querySelector("[data-services-dialog]");
const openServices = document.querySelector("[data-open-services]");
const closeServices = document.querySelector("[data-services-close]");
const aboutDialog = document.querySelector("[data-about-dialog]");
const openAbout = document.querySelector("[data-open-about]");
const closeAbout = document.querySelector("[data-about-close]");
const assetVersion = "20260603-bili-large";
const useMobileVideo =
  window.matchMedia("(max-width: 760px)").matches ||
  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const getVideoSource = (src) => {
  if (!src || !useMobileVideo) return src;
  return src.replace("assets/videos/", "assets/videos-mobile/");
};

const projects = {
  brand: {
    label: "Commercial Film",
    title: "人头马 XO 广告片",
    copy:
      "参与策划、拍摄与剪辑制作，以产品质感、光线变化和节奏控制呈现品牌调性。",
    role: "策划参与 / 拍摄 / 剪辑",
    output: "广告片 / 宣传物料",
    video: "assets/videos/remy-xo.mp4"
  },
  doc: {
    label: "Hotel Film",
    title: "九寨沟丽思卡尔顿隐世酒店宣传片",
    copy:
      "围绕酒店空间、环境气质与旅居体验完成影像表达，突出目的地与品牌高级感。",
    role: "拍摄 / 后期制作",
    output: "酒店宣传片",
    video: "assets/videos/ritz-jiuzhaigou.mp4"
  },
  audi: {
    label: "Auto Event",
    title: "广州奥迪车展发布宣传片",
    copy:
      "记录车展发布现场与品牌展示节奏，兼顾活动信息、车辆质感和现场氛围。",
    role: "拍摄 / 剪辑 / 活动影像",
    output: "发布宣传片",
    video: "assets/videos/audi-guangzhou-auto-show.mp4"
  },
  zuoyou: {
    label: "Brand Profile",
    title: "左右沙发个人宣传片 / 基金会横版",
    copy: "围绕品牌人物与公益内容进行影像呈现，强调真实、稳重和可信赖的表达。",
    role: "拍摄 / 剪辑",
    output: "个人宣传片 / 横版成片",
    video: "assets/videos/zuoyou-sofa-foundation.mp4"
  },
  marriott: {
    label: "Hotel Film",
    title: "柳州三江万怡酒店宣传片",
    copy: "通过空间、服务与地域氛围展示酒店体验，建立舒适、自然的品牌印象。",
    role: "拍摄 / 后期制作",
    output: "酒店宣传片",
    video: "assets/videos/marriott-sanjiang.mp4"
  },
  hardrock: {
    label: "Hotel Film",
    title: "深圳硬石酒店宣传片",
    copy: "以酒店空间、音乐气质和生活方式体验为重点，呈现更鲜明的品牌调性。",
    role: "拍摄 / 后期制作",
    output: "酒店宣传片",
    video: "assets/videos/hard-rock-shenzhen.mp4"
  },
  ritz: {
    label: "Hotel Film",
    title: "九寨沟丽思卡尔顿隐世酒店宣传片",
    copy: "围绕自然环境、隐世度假体验和酒店空间质感完成宣传片表达。",
    role: "拍摄 / 后期制作",
    output: "酒店宣传片",
    video: "assets/videos/ritz-jiuzhaigou.mp4"
  },
  honda: {
    label: "Auto Film",
    title: "广汽本田宣传片",
    copy: "结合汽车品牌调性、产品动态和宣传节奏，完成商业宣传内容制作。",
    role: "拍摄 / 剪辑",
    output: "汽车品牌宣传片",
    video: "assets/videos/gac-honda.mp4"
  },
  water: {
    label: "Event Film",
    title: "澳门水舞间活动宣传片",
    copy: "记录活动现场、舞台氛围与关键瞬间，完成适合传播的活动宣传内容。",
    role: "拍摄 / 剪辑",
    output: "活动宣传片",
    video: "assets/videos/macau-house-of-dancing-water.mp4"
  },
  shorts: {
    label: "Personal Shorts",
    title: "个人短片",
    copy: "收录旅拍、情绪短片和个人创作内容，呈现不同场景下的镜头表达、剪辑节奏与画面风格。",
    role: "拍摄 / 剪辑 / 调色 / 风格化制作",
    output: "个人短片合集",
    video: "assets/videos/personal-shorts.mp4",
    bilibili:
      "https://player.bilibili.com/player.html?bvid=BV1fh411Q7M3&page=1&high_quality=1&danmaku=0&autoplay=0"
  }
};

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filters.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    cards.forEach((card) => {
      const visible = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !visible);
    });
  });
});

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => {
    const project = projects[button.dataset.project];
    if (!project) return;

    if (worksDialog?.open) {
      worksDialog.close();
    }
    dialog.querySelector("[data-dialog-label]").textContent = project.label;
    dialog.querySelector("[data-dialog-title]").textContent = project.title;
    dialog.querySelector("[data-dialog-copy]").textContent = project.copy;
    dialog.querySelector("[data-dialog-role]").textContent = project.role;
    dialog.querySelector("[data-dialog-output]").textContent = project.output;
    dialog.classList.toggle("is-bili", Boolean(project.bilibili));
    dialogVideo.pause();
    dialogVideo.hidden = Boolean(project.bilibili);
    biliPlayer.hidden = !project.bilibili;
    videoStatus.hidden = true;
    fullPlay.hidden = Boolean(project.bilibili);
    dialogVideo.removeAttribute("src");
    biliFrame.src = "";
    dialogVideo.load();
    if (project.bilibili) {
      biliFrame.src = project.bilibili;
    } else if (project.video) {
      dialogVideo.src = `${getVideoSource(project.video)}?v=${assetVersion}`;
    }
    dialog.showModal();
  });
});

document.querySelectorAll("[data-open-works]").forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    worksDialog?.showModal();
  });
});

closeWorks?.addEventListener("click", () => worksDialog.close());

worksDialog?.addEventListener("click", (event) => {
  if (event.target === worksDialog) {
    worksDialog.close();
  }
});

document.querySelectorAll("[data-open-contact]").forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    contactDialog?.showModal();
  });
});

closeContact?.addEventListener("click", () => contactDialog.close());

contactDialog?.addEventListener("click", (event) => {
  if (event.target === contactDialog) {
    contactDialog.close();
  }
});

openServices?.addEventListener("click", (event) => {
  event.preventDefault();
  servicesDialog?.showModal();
});

closeServices?.addEventListener("click", () => servicesDialog.close());

servicesDialog?.addEventListener("click", (event) => {
  if (event.target === servicesDialog) {
    servicesDialog.close();
  }
});

openAbout?.addEventListener("click", (event) => {
  event.preventDefault();
  aboutDialog?.showModal();
});

closeAbout?.addEventListener("click", () => aboutDialog.close());

aboutDialog?.addEventListener("click", (event) => {
  if (event.target === aboutDialog) {
    aboutDialog.close();
  }
});

closeDialog.addEventListener("click", () => dialog.close());

dialog.addEventListener("close", () => {
  dialogVideo.pause();
  biliFrame.src = "";
});

dialogVideo.addEventListener("error", () => {
  dialogVideo.hidden = true;
  videoStatus.hidden = false;
  fullPlay.hidden = true;
});

fullPlay.addEventListener("click", async () => {
  if (!dialogVideo.src) return;
  try {
    await dialogVideo.play();
    if (dialogVideo.requestFullscreen) {
      await dialogVideo.requestFullscreen();
    } else if (dialogVideo.webkitEnterFullscreen) {
      dialogVideo.webkitEnterFullscreen();
    }
  } catch (error) {
    dialogVideo.play().catch(() => {});
  }
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

if (header) {
  window.addEventListener("scroll", setHeaderState, { passive: true });
  setHeaderState();
}
