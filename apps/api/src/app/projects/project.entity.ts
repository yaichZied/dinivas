import { Cloudprovider } from './../cloudprovider/cloudprovider.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne
} from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ unique: true })
  @ApiModelProperty()
  code: string;
  @Column({ unique: true })
  @ApiModelProperty()
  root_domain: string;
  @Column('text', { nullable: true })
  @ApiModelProperty()
  description: string;
  @ManyToOne(type => Cloudprovider)
  @JoinColumn()
  cloud_provider: Cloudprovider;
  @Column({ nullable: true })
  management_subnet_cidr: string;
  @Column({ nullable: true })
  management_subnet_dhcp_allocation_start: string;
  @Column({ nullable: true })
  management_subnet_dhcp_allocation_end: string;
  @Column({ nullable: true })
  floating_ip_pool: string;
  @Column({ nullable: true })
  public_router: string;
  @Column({ nullable: false })
  availability_zone: string = 'nova';
  @Column()
  monitoring: boolean = false;
  @Column()
  logging: boolean = false;
  @Column()
  enable_proxy: boolean = true;
  @Column({ nullable: true })
  proxy_cloud_flavor: string;
  @Column({ nullable: true })
  proxy_prefered_floating_ip: string;
  @Column({ nullable: true })
  logging_stack: string;
  @Column({ nullable: true })
  bastion_cloud_image: string;
  @Column({ nullable: true })
  bastion_cloud_flavor: string;
  @Column({ nullable: true })
  prometheus_cloud_flavor: string;
  @Column({ nullable: false })
  keycloak_host: string;
  @Column({ nullable: false })
  keycloak_client_id: string;
  @Column({ nullable: false })
  keycloak_client_secret: string;
  @Column({ nullable: true })
  status: string;
}
