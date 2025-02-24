// import { Form } from './components/Form';
// import { Root } from './components/Root';

// export const config = {
//   components: {
//     Form: {
//       label: "Form",  // This will show in the left sidebar
//       component: Form,
//       defaultProps: {
//         fields: []
//       },
//       fields: {
//         fields: {
//           type: "array",
//           label: "Form Fields",
//           defaultItemProps: {
//             type: "text",
//             label: "",
//           },
//           arrayFields: {
//             label: {
//               type: "text",
//               label: "Field Label",
//               required: true
//             },
//             type: {
//               type: "select",
//               label: "Field Type",
//               options: [
//                 { label: "Text Input", value: "text" },
//                 { label: "Text Area", value: "textarea" },
//                 { label: "Radio Buttons", value: "radio" },
//                 { label: "Checkbox", value: "checkbox" },
//                 { label: "Dropdown", value: "select" }
//               ],
//               required: true
//             },
//             options: {
//               type: "array",
//               label: "Options",
//               showIf: (props) => ["radio", "select"].includes(props.type),
//               defaultItemProps: {
//                 label: "",
//                 value: ""
//               },
//               arrayFields: {
//                 label: {
//                   type: "text",
//                   label: "Option Label"
//                 },
//                 value: {
//                   type: "text",
//                   label: "Option Value"
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   },
//   root: {
//     component: Root
//   }
// }; 


import { Form } from './components/Form';
import { Root } from './components/Root';

export const config = {
  components: {
    Form: {
      label: "Form",
      render: Form,
      defaultProps: {
        fields: []
      },
      fields: {
        fields: {
          type: "array",
          label: "Form Fields",
          defaultItemProps: {
            type: "text",
            label: "",
            name: "",
            placeholder: ""
          },
          arrayFields: {
            label: {
              type: "text",
              label: "Field Label",
              required: true
            },
            name: {
              type: "text",
              label: "Field Name",
              required: true
            },
            placeholder: {
              type: "text",
              label: "Placeholder"
            },
            type: {
              type: "select",
              label: "Field Type",
              options: [
                { label: "Text Input", value: "text" },
                { label: "Text Area", value: "textarea" },
                { label: "Radio Buttons", value: "radio" },
                { label: "Checkbox", value: "checkbox" },
                { label: "Dropdown", value: "select" }
              ],
              required: true
            },
            options: {
              type: "array",
              label: "Options",
              showIf: (props) => ["radio", "select"].includes(props.type),
              defaultItemProps: {
                label: "",
                value: ""
              },
              arrayFields: {
                label: {
                  type: "text",
                  label: "Option Label"
                },
                value: {
                  type: "text",
                  label: "Option Value"
                }
              }
            }
          }
        }
      }
    }
  },
  root: {
    render: Root,
    props: {
      zones: {
        type: "zones",
        defaultValue: {
          root: []
        }
      }
    }
  }
};
