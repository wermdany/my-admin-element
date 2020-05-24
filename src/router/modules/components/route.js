const components = [
  {
    path: "/components",
    name: "components",
    redirect: "/components/sticky",
    component: "main",
    meta: {
      icon: "open",
      title: "内置组件"
    },
    children: [
      {
        path: "sticky",
        name: "sticky",
        component: "sticky",
        meta: {
          icon: "",
          title: "黏着组件"
        }
      },
      {
        path: "step-form",
        name: "componentsStepForm",
        component: "stepForm",
        meta: {
          icon: "",
          title: "分步表单",
          introduce:
            "将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。"
        }
      }
    ]
  }
];

export default components;
