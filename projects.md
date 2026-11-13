---
layout: default
title: Projects
permalink: /projects/
---

## OneForm — OpenNebula Cloud Provisioning

**OpenNebula Systems · June 2024 – September 2026**

OneForm is OpenNebula's cloud provisioning tool, designed to automate the deployment of OpenNebula clusters across different infrastructure environments.

It represents the evolution of the previous `oneprovision` and `oneprovider` tooling, moving from a collection of standalone scripts to a Ruby application built around a Sinatra server. While introducing this new architecture, OneForm retained the existing command-line tools and workflows.

I participated in the design and development of OneForm, contributing to its implementation, testing, and documentation. One of my main responsibilities was integrating **Scaleway** as a cloud provider, enabling users to deploy OpenNebula clusters on Scaleway Elastic Computing infrastructure.

### My Contributions

- **Architecture and design:** Participated in the design of OneForm and its evolution from standalone provisioning scripts into a server-based application.
- **Backend development:** Contributed to the development of the Ruby/Sinatra application and its provisioning functionality.
- **Scaleway integration:** Led the integration of Scaleway as a cloud provider, enabling automated deployment of OpenNebula clusters on Scaleway infrastructure.
- **Testing:** Contributed to testing the tool and its functionality.
- **Documentation:** Worked on the technical documentation to support users and developers working with OneForm.

### Sunstone Integration

In addition to the provisioning tool itself, I was responsible for integrating OneForm into **OpenNebula Sunstone** for the 7.2 release.

This work brought OneForm functionality into OpenNebula's web interface, allowing users to interact with the provisioning service through Sunstone.

My contributions included:

- Integrating OneForm functionality into the Sunstone interface.
- Developing frontend components using React.js.
- Implementing the required integration with the Node.js backend.
- Writing end-to-end tests using Cypress.

### Technologies

Ruby, Sinatra, RSpec, JavaScript, React.js, Node.js, Cypress, Scaleway.

### Further Reading

- [OneForm Documentation — OpenNebula 7.4](https://docs.opennebula.io/7.4/product/operation_references/opennebula_services_configuration/oneform/)
- [OpenNebula Cluster Provisioning](https://docs.opennebula.io/7.2/product/cluster_provisioning/overview/)