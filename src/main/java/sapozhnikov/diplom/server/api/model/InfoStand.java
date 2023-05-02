package sapozhnikov.diplom.server.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.Table;

@Entity
@AllArgsConstructor
@Table(name = "info_stand")
@NoArgsConstructor(force = true)
@Data
public class InfoStand {

    @Id
    private Long id;

    private String loginUser;
    private int softInterruptsCount;
    private int activeUserSystem;
    private double cpuTemp;
    private double gpuTemp;
    private double cpuPercentUsage;
    private double virtualMemoryPercentUsage;
    private double diskPercentUsage;

    @Override
    public String toString() {
        return "DataStatus{" +
                "id=" + id +
                ", softInterruptsCount=" + softInterruptsCount +
                ", activeUserSystem=" + activeUserSystem +
                ", cpuTemp=" + cpuTemp +
                ", gpuTemp=" + gpuTemp +
                ", cpuPercentUsage=" + cpuPercentUsage +
                ", virtualMemoryPercentUsage=" + virtualMemoryPercentUsage +
                ", diskPercentUsage=" + diskPercentUsage +
                '}';
    }
}
